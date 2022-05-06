import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from "../cookie/cookie.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private cookie: CookieService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.cookie.getAccessToken() !== null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.cookie.getAccessToken()}`
        }
      });
    }
    return next.handle(request);
  }
}
