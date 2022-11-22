import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, switchMap} from 'rxjs';
import {AuthService} from "@services/integrations/auth/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authService.getUserRefreshToken().pipe(switchMap((t) => {
      return next.handle(this.addAuthToken(request, t));
    }));
  }

  addAuthToken(request: HttpRequest<unknown>, token:string): HttpRequest<unknown> {
    if (token) {
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return request;
  }
}
