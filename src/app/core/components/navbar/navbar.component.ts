import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <div class="btn-group">
  
    <button class="btn btn-info"
            routerLink="heroparent"
            routerLinkActive="btn-warning"
    >hero</button>
    
    <button class="btn btn-info"
    routerLink="nameparent"
    routerLinkActive="btn-warning"
    >name</button>
    
    <button class="btn btn-info"
    routerLink="versionparent"
    routerLinkActive="btn-warning"
    >version</button>

    <button class="btn btn-info"
    routerLink="votetaker"
    routerLinkActive="btn-warning"
    >votetaker</button>

    <button class="btn btn-info"
    routerLink="countdown-lv"
    routerLinkActive="btn-warning"
    >countdown-lv</button>

    <button class="btn btn-info"
    routerLink="countdown-vc"
    routerLinkActive="btn-warning"
    >countdown-vc</button>

    <button class="btn btn-info"
    routerLink="mission"
    routerLinkActive="btn-warning"
    >mission</button>

  </div>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
