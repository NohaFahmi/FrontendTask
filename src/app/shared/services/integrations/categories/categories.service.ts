import { Injectable } from '@angular/core';
import {CustomHttpService} from "@services/custom-http/custom-http.service";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private customHttpService: CustomHttpService) { }

  getAllCategories(sender: string): Promise<any> {
    return this.customHttpService.sendBackendRequest({
      endpoint: 'products/categories',
    })
  }
}
