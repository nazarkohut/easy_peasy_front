import {Component, OnInit} from '@angular/core';
import {CookieService} from "../../../../../services/jwt/cookie/cookie.service";
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-profile-menu-header',
  templateUrl: './profile-menu-header.component.html',
  styleUrls: ['./profile-menu-header.component.scss']
})
export class ProfileMenuHeaderComponent implements OnInit {
  full_name = this.getFullName();
  username = this.getUsername();

  constructor(private cookie: CookieService) {
  }

  ngOnInit(): void {
  }

  getDecodedToken() {
    const myRawToken: string | undefined = this.cookie.getCookie('access_token');
    const helper = new JwtHelperService();
    return helper.decodeToken(myRawToken);
  }

  getFullName() {
    return this.getDecodedToken().full_name;
  }

  getUsername() {
    return this.getDecodedToken().username;
  }
}
