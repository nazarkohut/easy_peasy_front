import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {backendUrl, httpOptions} from "../constants";


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(loginData: { email: string, password: string } | { username: string, password: string }) {
    return this.http.post<{
      access: string,
      refresh: string
      }>(backendUrl + '/auth/users/login/', loginData)
  }

  register(registrationData:
             { email: string, username: string, first_name: string, last_name: string, password: string }) {
    return this.http.post(backendUrl + '/auth/users/', registrationData)
  }

  logout(logoutData: { refresh: string }) {
    return this.http.post(backendUrl + '/auth/users/logout/', logoutData);
  }

  refreshToken(token: string) {
    return this.http.post<{
      access: string,
      refresh: string
    }>(backendUrl + '/auth/users/refresh/', {
      refresh: token
    }, httpOptions);
  }
}
