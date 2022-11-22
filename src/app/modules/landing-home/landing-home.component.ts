import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IProduct} from "@interfaces/product.interface";
import {ProductsService} from "@services/integrations/products/products.service";

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProductsList();
  }

  getAllProductsList() {
    this.productsService.getAllProducts('landing-home').then((result) => {
      this.products = result.products;
    })
  }

}
