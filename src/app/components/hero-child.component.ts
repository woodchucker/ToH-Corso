/**
 * Pass data from parent to child with input binding
 * HeroChildComponent has two input properties
 * The second @Input aliases the child component property name masterName as 'master'.
 * The HeroParentComponent nests the child HeroChildComponent
 * inside an *ngFor repeater, binding its master string property
 * to the child's master alias, and each iteration's hero
 * instance to the child's hero property.
 */
import { Component, Input } from '@angular/core';
import { Hero } from '../models/hero';


@Component({
  selector: 'app-hero-child',
  template: `
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
  `
})
export class HeroChildComponent {
  @Input() hero: Hero;
  // tslint:disable-next-line: no-input-rename
  @Input('master') masterName: string;
}
