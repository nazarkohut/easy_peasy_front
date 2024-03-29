import {Injectable} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})

export class CookieService {

  constructor() {
  }

  setCookie(name: string, value: string, minutes: number) {
    let expires = '';
    if (minutes) {
      let date = new Date();
      date.setTime(date.getTime() + minutes * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }

  getCookie(name: string) {
    let nameEQ = name + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return undefined;
  }

  clearCookie(name: string) {
    let date = new Date();
    date.setTime(date.getTime() + 1);
    let expires = '; expires=' + date.toUTCString();
    document.cookie = name + '=' + '' + expires + '; path=/';
  }

  getAccessToken() {
    return this.getCookie('access_token');
  }

  getRefreshToken() {
    return this.getCookie('refresh_token');
  }

  isAuthenticated() {
    return this.getAccessToken() && this.getRefreshToken()
  }

  setAllAuthCookies(access: String | undefined, refresh: String | undefined){
    this.setCookie("access_token", String(access),0.1);
    this.setCookie("refresh_token", String(refresh),60);
    const accessTokenData = this.getDecodedToken();
    this.setCookie('username', accessTokenData.username, 60)
    this.setCookie('full_name', accessTokenData.full_name, 60)
  }


  getDecodedToken() {
    const myRawToken: string | undefined = this.getAccessToken();
    const helper = new JwtHelperService();
    return helper.decodeToken(myRawToken);
  }

  getUsername() {
    return this.getCookie('username');
  }

  getFullName() {
    return this.getCookie('full_name');
  }
}

