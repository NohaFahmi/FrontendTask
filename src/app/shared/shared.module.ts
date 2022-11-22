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
import { ListSortComponent } from './components/list-sort/list-sort.component';
import {NzSelectModule} from "ng-zorro-antd/select";



@NgModule({
    declarations: [
        ProductCardComponent,
        ListFiltersComponent,
        ListSortComponent
    ],
    exports: [
        ProductCardComponent,
        ListFiltersComponent,
        ListSortComponent
    ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzRateModule,
    ReactiveFormsModule,
    FormsModule,
    NzCollapseModule,
    NzCheckboxModule,
    NzSelectModule
  ]
})
export class SharedModule { }
