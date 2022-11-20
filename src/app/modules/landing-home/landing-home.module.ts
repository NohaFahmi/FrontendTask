import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingHomeRoutingModule } from './landing-home-routing.module';
import { LandingHomeComponent } from './landing-home.component';


@NgModule({
  declarations: [
    LandingHomeComponent
  ],
  imports: [
    CommonModule,
    LandingHomeRoutingModule
  ]
})
export class LandingHomeModule { }
