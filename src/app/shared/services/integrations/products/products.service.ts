import { Injectable } from '@angular/core';
import {CustomHttpService} from "@services/custom-http/custom-http.service";
import {IProduct, IProductsResponse} from "@interfaces/product.interface";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   products: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);

  constructor(private customHttpService: CustomHttpService) { }

  getAllProducts(sender: string): Promise<IProductsResponse> {
    return new Promise((resolve, reject) => {
      this.customHttpService.sendBackendRequest({
        endpoint: 'products',
      }).then((response: IProductsResponse) => {
        this.products.next(response.products);
        resolve(response);
      }).catch((error) => reject(error));
    });
  }

  getProductById(sender: string, productId: number): Promise<IProduct> {
    return this.customHttpService.sendBackendRequest({
      endpoint: `products/${productId}`,
    });
  }
  searchInProducts(sender: string, keyword: string): Promise<IProductsResponse> {
    return this.customHttpService.sendBackendRequest({
      endpoint: `products/search?q=${keyword}`,
    });
  }

  filterProducts(filterType: number) {
    console.log("Products",this.products.getValue())
  }
}
