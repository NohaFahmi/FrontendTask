import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzRateModule} from "ng-zorro-antd/rate";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListFiltersComponent } from './components/list-filters/list-filters.component';
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";



@NgModule({
    declarations: [
        ProductCardComponent,
        ListFiltersComponent
    ],
  exports: [
    ProductCardComponent,
    ListFiltersComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzRateModule,
    ReactiveFormsModule,
    FormsModule,
    NzCollapseModule,
    NzCheckboxModule
  ]
})
export class SharedModule { }
