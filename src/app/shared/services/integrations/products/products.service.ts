import { Injectable } from '@angular/core';
import {CustomHttpService} from "@services/custom-http/custom-http.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private customHttpService: CustomHttpService) { }

  getAllProducts(sender: string): Promise<any> {
    return this.customHttpService.sendBackendRequest({
      endpoint: 'products',
    });
  }
}
