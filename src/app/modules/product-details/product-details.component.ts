import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
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
export class ProductDetailsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductsService) { }
  productId?: number;
  productDetails?: IProduct;
  sizes: string[] = ['1.5 kg', '1 kg', '500 gr', '250 gr'];
  ingredients: string[] = ['Nutrisi', 'Vitamin', 'Protein']
  selectedProductImage: string = '';
  selectedSize: number = 0;

  ngOnInit(): void {
    let paramsSub = this.route.params.subscribe((params) => {
      let productId = params['id'];
      if(productId) {
        this.productId = productId;
        this.productService.getProductById('product-details',productId).then((product) => {
          this.productDetails = product;
          this.selectedProductImage = product.images[0];
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

  onAddingToCart(qty: number) {
    if(this.productId) {
      this.productService.addProductToCart(this.productId, qty);
    }
  }

  switchDisplayedImage(index: number) {
    this.selectedProductImage = this.productDetails?.images[index] || '';
  }

  onSelectSize(index: number) {
    this.selectedSize = index;
  }

  ngOnDestroy(): void {
    this.subscriptions.map((sub) => {
      sub.unsubscribe();
    })
  }
}
