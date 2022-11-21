import { Component, OnInit } from '@angular/core';
import {IProduct} from "@interfaces/product.interface";

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss']
})
export class LandingHomeComponent implements OnInit {
  product: IProduct = {
    id: 1,
    title: 'Product 1',
    description: 'Product 1 description',
    price: 100,
    rating: 4.78,
    images: ['https://picsum.photos/200/300'],
    category: 'Category 1',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
