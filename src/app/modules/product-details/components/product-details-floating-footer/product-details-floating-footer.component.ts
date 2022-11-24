import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {IProduct} from "@interfaces/product.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-details-floating-footer',
  templateUrl: './product-details-floating-footer.component.html',
  styleUrls: ['./product-details-floating-footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsFloatingFooterComponent implements OnInit {
  @Input() productDetails?: IProduct;
  @Output() onAddingToCart: EventEmitter<number> = new EventEmitter<number>();
  qty:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  decreaseQty() {
    if(this.qty > 1) {
      this.qty -= 1;
    }
  }

  increaseQty() {
    this.qty += 1;
  }

  addToCart() {
    this.onAddingToCart.emit(this.qty);
  }
}
