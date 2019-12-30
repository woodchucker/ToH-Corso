import { AstronautComponent } from './components/astronaut/astronaut.component';
import { MissionControlComponent } from './components/mission-control/mission-control.component';
import { HeroChildComponent } from './components/hero-child.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroParentComponent } from './components/hero-parent.component';
import { NameChildComponent } from './components/name-child.component';
import { NameParentComponent } from './components/name-parent.component';
import { VersionChildComponent } from './components/version-child/version-child.component';
import { VersionParentComponent } from './components/version-parent/version-parent.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { VoterComponent } from './components/voter/voter.component';
import { VoteTakerComponent } from './components/votetaker/votetaker.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './components/countdown-parent-lv/countdown-parent-lv.component';
import { CountdownViewChildParentComponent } from './components/countdown-vc-parent/countdown-vc-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    NavbarComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    CountdownViewChildParentComponent,
    MissionControlComponent,
    AstronautComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
