import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const helper = new JwtHelperService();
    const token: string = localStorage.getItem('jwt') || 'Bearer none';
    request = request.clone({
      setHeaders: {
        // https://tools.ietf.org/html/rfc6750
        Authorization: `${token}`
      }
    });
    return next.handle(request);
  }
}
