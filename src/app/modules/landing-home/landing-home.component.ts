import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {IProduct} from "@interfaces/product.interface";
import {ProductsService} from "@services/integrations/products/products.service";
import {IFilter, IFilterOption} from "@interfaces/common.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

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
  query: string = '';
  subscriptions: Subscription[] = [];
  constructor(private productsService: ProductsService,
              private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    let paramsSub = this.activatedRoute.queryParams.subscribe((queryParams) => {
      if (queryParams['q']) {
        this.query = queryParams['q'];
        if (this.query) {
          this.getSearchResults();
        } else {
          this.router.navigate(['/home']).then(() => {
            this.getAllProductsList();
          })
        }
      } else {
        this.router.navigate(['/home']).then(() => {
          this.getAllProductsList();
        })
      }
    });
    this.subscriptions.push(paramsSub);
  }
  getSearchResults() {
    this.productsService.searchInProducts("landing-home", this.query).then((result) => {
      this.products = result.products;
    })
  }
  getAllProductsList() {
    this.productsService.getAllProducts('landing-home').then((result) => {
      this.products = result.products;
    }).finally(() => {
      this.getProductsFilters();
    })
  }
  getProductsFilters() {
    this.productsService.getFilters().then((filters) => {
      this.productsFilters = filters;
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

  onNavigationToProductPage(id: number) {
    this.router.navigate(['/product/' + id]);
  }
}
