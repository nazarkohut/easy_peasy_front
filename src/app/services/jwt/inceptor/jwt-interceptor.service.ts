import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError} from 'rxjs';
import {CookieService} from "../cookie/cookie.service";
import {AuthService} from "../../auth/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private cookie: CookieService, private auth: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<object>>{
    const accessToken = this.cookie.getAccessToken();
    if (accessToken !== undefined) {
      request = this.getTokenHeader(request, accessToken);
    }
    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handle401Error(request, next);
      }
      return throwError(error);
    })) as Observable<HttpEvent<object>>;
  }

  getTokenHeader(request: any, token: String | undefined) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private handle401Error(request: any, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      const token = this.cookie.getRefreshToken();
      if (token)
        return this.auth.refreshToken(token).pipe(
          switchMap((token: any) => {
            this.isRefreshing = false;
            alert(token);
            this.cookie.setAllCookies(token.access, token.refresh);
            this.refreshTokenSubject.next(token.access);
            request = this.getTokenHeader(request, token.access);
            return next.handle(request);
          }),
          catchError((err) => {  // have to check How this block work
            this.isRefreshing = false;
            alert("Here")
            console.log(err)
            this.cookie.clearCookie("access_token");
            this.cookie.clearCookie("refresh_token");
            // this.tokenService.signOut();
            return throwError(err);
          }),
          // finalize(() =>{
          //   this.isRefreshing = true;
          // })
        );
    }
    return this.refreshTokenSubject.pipe(
      filter(token => token !== undefined),
      take(1),
      switchMap((token) => next.handle(this.getTokenHeader(request, token)))
    );
  }
}
