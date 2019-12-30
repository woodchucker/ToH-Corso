import { MissionControlComponent } from './components/mission-control/mission-control.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroParentComponent } from './components/hero-parent.component';
import { NameParentComponent } from './components/name-parent.component';
import { VersionParentComponent } from './components/version-parent/version-parent.component';
import { VoteTakerComponent } from './components/votetaker/votetaker.component';
import { CountdownViewChildParentComponent } from './components/countdown-vc-parent/countdown-vc-parent.component';
import { CountdownParentComponent } from './components/countdown-parent-lv/countdown-parent-lv.component';


const routes: Routes = [

    { path: 'heroparent', component: HeroParentComponent }
  , { path: 'nameparent', component: NameParentComponent }
  , { path: 'versionparent', component: VersionParentComponent }
  , { path: 'votetaker', component: VoteTakerComponent }
  , { path: 'countdown-lv', component: CountdownParentComponent }
  , { path: 'countdown-vc', component: CountdownViewChildParentComponent }
  , { path: 'mission', component: MissionControlComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
