/**
 * Intercept input property changes with ngOnChanges()
 * Detect and act upon changes to input property values with
 * the ngOnChanges() method of the OnChanges lifecycle hook
 * interface. You may prefer this approach to the property 
 * setter when watching multiple, interacting input properties.
 */

import { Component, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-version-child',
  template: `
  <h3>Version {{major}}.{{minor}}</h3>
  <h4>Change log:</h4>
  <ul>
    <li *ngFor="let change of changeLog">{{change}}</li>
  </ul>
`
})
export class VersionChildComponent implements OnChanges {
  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
}