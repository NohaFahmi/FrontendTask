import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "@services/integrations/auth/auth.service";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductsService} from "@services/integrations/products/products.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {
  searchKeyword: FormControl;
  cartItemsCount: number = 0;
  userInfo: unknown | null = {};
  subscriptions: Subscription[] = [];

  constructor(private authService:AuthService, private router:Router, private productService:ProductsService) {
    this.searchKeyword = new FormControl('');
  }

  ngOnInit(): void {
    let cartCountSub = this.productService.cartItemsCount.subscribe((count) => {
      this.cartItemsCount = count;
    });
    let userInfoSub = this.authService.userInfo.subscribe((userInfo) => {
      this.userInfo = userInfo;
    });
    this.subscriptions.push(cartCountSub);
    this.subscriptions.push(userInfoSub);
  }

  onLogout() {
    this.authService.logoutUser().then((res) => {
      this.router.navigate(['/login']);
    } ).catch((err) => { })
  }


  onSearching() {
    if(this.searchKeyword.value) {
      this.router.navigate(['/search'],
        {queryParams: {q: this.searchKeyword.value}});
    } else {
      this.router.navigate(['/home']);
    }
  }

  resetSearchKeyWord() {
    this.searchKeyword.reset();
  }

  ngOnDestroy(): void {
    this.subscriptions.map((sub) => {
      sub.unsubscribe();
    });
  }
}
