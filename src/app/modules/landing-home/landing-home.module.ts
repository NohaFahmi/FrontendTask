import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingHomeRoutingModule } from './landing-home-routing.module';
import { LandingHomeComponent } from './landing-home.component';
import {SharedModule} from "@shared/shared.module";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzEmptyModule} from "ng-zorro-antd/empty";


@NgModule({
  declarations: [
    LandingHomeComponent
  ],
    imports: [
        CommonModule,
        LandingHomeRoutingModule,
        SharedModule,
        NzGridModule,
        NzDrawerModule,
        NzButtonModule,
        NzIconModule,
        NzEmptyModule
    ]
})
export class LandingHomeModule { }
