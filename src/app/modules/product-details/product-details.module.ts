import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import {NzRateModule} from "ng-zorro-antd/rate";
import {FormsModule} from "@angular/forms";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import { ProductDetailsFloatingFooterComponent } from './components/product-details-floating-footer/product-details-floating-footer.component';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductDetailsFloatingFooterComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    NzRateModule,
    FormsModule,
    NzIconModule,
    NzButtonModule
  ]
})
export class ProductDetailsModule { }
