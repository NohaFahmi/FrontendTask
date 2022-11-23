import { Injectable } from '@angular/core';
import {CustomHttpService} from "@services/custom-http/custom-http.service";
import {IProduct, IProductsResponse} from "@interfaces/product.interface";
import {BehaviorSubject} from "rxjs";
import {IFilter, IFilterOption} from "@interfaces/common.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   products: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
   filteredProducts: IProduct[] = [];
   selectedCategoriesFilters: IFilterOption[] = [];
   selectedPricesFilters: IFilterOption[] = [];
  constructor(private customHttpService: CustomHttpService) { }

  getAllProducts(sender: string): Promise<IProductsResponse> {
    return new Promise((resolve, reject) => {
      this.customHttpService.sendBackendRequest({
        endpoint: 'products?limit=100',
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
  private filterProductsByPrice(pricesFilter: IFilterOption[], productsList?: IProduct[]) {
    this.filteredProducts = [];
    pricesFilter.forEach((price) => {
        const min = price.id;
        const max = price.id + 100;
      if(productsList && productsList.length > 0) {
        this.filteredProducts.push(...productsList.filter(
          (product) => product.price >= +min && product.price <= +max && price.selected));
      } else {
        this.filteredProducts.push(...this.products.getValue().filter(
          (product) => product.price >= +min && product.price <= +max && price.selected));
      }

    });
  }

  private filterProductsByCategory(categoryFilters: IFilterOption[], productsList?: IProduct[]) {
    this.filteredProducts = [];
    categoryFilters.forEach((category) => {
      if(productsList && productsList.length > 0) {
        this.filteredProducts.push(...productsList.filter((product) => product.category === category.name && category.selected));
      } else {
        this.filteredProducts.push(...this.products.getValue().filter(
          (product) => product.category === category.name && category.selected));
      }
    });
  }

  filterProducts(filters: {[key: string]: IFilterOption[]}):Promise<IProduct[]> {
    return new Promise((resolve) => {
     if(filters['categories'].length >0 && filters['prices'].length > 0) {
       this.filterProductsByCategory(filters['categories']);
       this.filterProductsByPrice(filters['prices'], this.filteredProducts);
     } else {
       if(filters['categories'].length >0) {
         this.filterProductsByCategory(filters['categories']);
       } else if(filters['prices'].length > 0) {
         this.filterProductsByPrice(filters['prices']);
       } else {
          this.filteredProducts = this.products.getValue();
       }
     }
      resolve(this.filteredProducts);
   })
  }
  getFilters(): Promise<IFilter[]> {
   return new Promise((resolve) => {
     let filters: IFilter[] = [
       {id: 'categories', title: 'Categories', values: [
           {name: "smartphones", id: 1, selected: false},
           {name: "laptops", id: 2, selected: false},
           {name: "fragrances", id: 3, selected: false},
           {name: "skincare", id: 4,  selected: false},
           {name: "groceries", id:5 ,selected: false},
           {name: "home-decoration", id: 6 ,selected: false},
           {name: "furniture", id: 7,selected: false},
           {name: "tops", id: 8,selected: false},
           {name: "womens-dresses", id: 9,selected: false},
           {name: "womens-shoes", id: 10,selected: false},
           {name: "womens-watches", id: 11,selected: false},
           {name: "womens-bags", id: 12,selected: false},
           {name: "womens-jewellery", id: 13,selected: false},
           {name: "mens-shirts", id: 14,selected: false},
           {name: "mens-shoes", id: 15,selected: false},
           {name: "mens-watches", id: 16,selected: false},
           {name: "sunglasses", id: 17,selected: false},
           {name: "automotive", id: 18,selected: false},
           {name: "motorcycle", id: 19,selected: false},
           {name: "lighting", id: 20,selected: false},
         ]},
        {id: 'prices', title: 'Prices', values: [
            {name: "100-200", id: 100, selected: false},
            {name: "200-300", id: 200, selected: false},
            {name: "300-400", id: 300,  selected: false},
            {name: "400-500", id:400,selected: false},
            {name: "500-600", id: 500 ,selected: false},
            {name: "600-700", id: 600,selected: false},
            {name: "700-800", id: 700,selected: false},
          ]}
     ]
      resolve(filters);
    });
  }
  sortProductsByPrice(sortType: {id: string, name: string}):Promise<IProduct[]>  {
    return new Promise((resolve) => {
      if(sortType.id === 'asc-price') {
        this.products.getValue().sort((a, b) => a.price - b.price);
      } else {
        this.products.getValue().sort((a, b) => b.price - a.price);
      }
      resolve(this.products.getValue());
    });
  }
}
