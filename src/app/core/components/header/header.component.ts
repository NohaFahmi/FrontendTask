import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "@services/integrations/auth/auth.service";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  searchKeyword: FormControl;

  constructor(private authService:AuthService, private router:Router) {
    this.searchKeyword = new FormControl('');
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logoutUser().then((res) => {
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
}
