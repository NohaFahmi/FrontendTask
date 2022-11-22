import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

interface IRequestOptions {
  endpoint: string;
  sender?: string;
  receiver?: string;
  body?: object;
}

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  constructor(private httpClient: HttpClient) { }

  get apiURL(): string | undefined {
    return environment.serviceURL;
  }

  sendBackendRequest(request: IRequestOptions): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if(!this.apiURL) {
        throw new Error('API URL is not defined');
      }
      const baseURL = `${this.apiURL}/${request.endpoint}`;
      this.httpClient.get<any>(baseURL).subscribe((response: any) => {
        if(response) {
          return resolve(response);
        } else {
          return reject("No response");
        }
      });
    });
  }
}
