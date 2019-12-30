/**
 * Parent listens for child event
 * The child component exposes an EventEmitter property with
 * which it emits events when something happens. The parent binds
 * to that event property and reacts to those events.
 * The child's EventEmitter property is an output property,
 * typically adorned with an @Output decoration as seen in this
 * VoterComponent
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `
    <h4>{{name}}</h4>
    <button (click)="vote(true)"  [disabled]="didVote">Agree</button>
    <button (click)="vote(false)" [disabled]="didVote">Disagree</button>
  `
})
export class VoterComponent {
  @Input()  name: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}

/**
 * Clicking a button triggers emission of a true or false, the
 *  boolean payload. The parent VoteTakerComponent binds an
 * event handler called onVoted() that responds to the child
 * event payload $event and updates a counter.
 * The framework passes the event argument—represented by
 * $event—to the handler method, and the method processes it:
 */
