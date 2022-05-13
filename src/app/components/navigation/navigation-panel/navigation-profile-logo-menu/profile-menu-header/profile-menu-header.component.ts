import {Component, OnInit} from '@angular/core';
import {CookieService} from "../../../../../services/jwt/cookie/cookie.service";
import {JwtHelperService} from '@auth0/angular-jwt';
import {AuthService} from "../../../../../services/auth/auth.service";
import {AuthGuard} from "../../../../../services/guards/auth.guard";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "../../../../../services/jwt/inceptor/jwt-interceptor.service";

@Component({
  selector: 'app-profile-menu-header',
  templateUrl: './profile-menu-header.component.html',
  styleUrls: ['./profile-menu-header.component.scss'],
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}]
})
export class ProfileMenuHeaderComponent implements OnInit {
  full_name = this.getFullName();
  username = this.getUsername();

  constructor(private auth: AuthService, private cookie: CookieService) {
  }

  ngOnInit(): void {
  }

  getDecodedToken() {
    const myRawToken: string | undefined = this.cookie.getCookie('access_token');
    if (!myRawToken){

    }
    const helper = new JwtHelperService();
    return helper.decodeToken(myRawToken);
  }

  getFullName() {
    console.log(this.getDecodedToken());
    return this.getDecodedToken().full_name;
  }

  getUsername() {
    return this.getDecodedToken().username;
  }
}
