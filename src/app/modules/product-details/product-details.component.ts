import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ProductsService} from "@services/integrations/products/products.service";
import {IProduct} from "@interfaces/product.interface";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsComponent implements OnInit {
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductsService) { }
  productId?: number;
  productDetails?: IProduct;
  sizes: string[] = ['1.5 kg', '1 kg', '500 gr', '250 gr'];
  ingredients: string[] = ['Nutrisi', 'Vitamin', 'Protein']
  qty:number = 1;
  ngOnInit(): void {
    let paramsSub = this.route.params.subscribe((params) => {
      let productId = params['id'];
      if(productId) {
        this.productId = productId;
        this.productService.getProductById('product-details',productId).then((product) => {
          this.productDetails = product;
        })
      } else {
        this.router.navigate(['/home']);
      }

    });
    this.subscriptions.push(paramsSub);
  }

  onNavigateToHome() {
    this.router.navigate(['/home']);
  }

  decreaseQty() {
    if(this.qty > 1) {
      this.qty -= 1;
    }
  }

  increaseQty() {
    this.qty += 1;
  }

  onAddingToCart() {
    if(this.productId) {
      this.productService.addProductToCart(this.productId, this.qty);
    }
  }
}
