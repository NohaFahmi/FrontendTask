import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingHomeRoutingModule } from './landing-home-routing.module';
import { LandingHomeComponent } from './landing-home.component';
import {SharedModule} from "@shared/shared.module";
import {NzGridModule} from "ng-zorro-antd/grid";


@NgModule({
  declarations: [
    LandingHomeComponent
  ],
    imports: [
        CommonModule,
        LandingHomeRoutingModule,
        SharedModule,
        NzGridModule
    ]
})
export class LandingHomeModule { }
