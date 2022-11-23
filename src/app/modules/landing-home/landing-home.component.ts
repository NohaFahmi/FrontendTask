import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IProduct} from "@interfaces/product.interface";
import {ProductsService} from "@services/integrations/products/products.service";
import {IFilter, IFilterOption} from "@interfaces/common.interface";

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent implements OnInit {
  products: IProduct[] = [];
  productsFilters: IFilter[] = [];
  selectedFilters: {[key: string]: IFilterOption[]} = {}
  isDrawerVisible = false;
  sortItems: {id: string, name: string}[] = [
    {id: 'asc-price', name: 'Price - Low to High'},
    {id: 'desc-price', name: 'Price - High to Low'},
  ];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProductsList();
  }

  getAllProductsList() {
    this.productsService.getAllProducts('landing-home').then((result) => {
      this.products = result.products;
    }).finally(() => {
    this.productsService.getFilters().then((filters) => {
      this.productsFilters = filters;
    })
    })
  }

  onFilteringProducts(filters:{[key: string]: IFilterOption[]}) {
    this.selectedFilters = filters;
    this.productsService.filterProducts(filters).then((products) => {
      this.products = products;
    })
  }

  onOpenDrawer() {
    this.isDrawerVisible = true;
  }

  onCloseDrawer() {
    this.isDrawerVisible = false;
  }

  onSortingProducts(sortOption: {id: string, name: string}) {
    this.productsService.sortProductsByPrice(sortOption).then((products) => {
      this.products = products;
    })
  }
}
