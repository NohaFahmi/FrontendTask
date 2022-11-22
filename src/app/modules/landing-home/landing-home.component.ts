import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IProduct} from "@interfaces/product.interface";

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent implements OnInit {
  products?: IProduct[];
  constructor() { }

  ngOnInit(): void {
  }

}
