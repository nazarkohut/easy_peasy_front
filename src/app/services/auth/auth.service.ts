import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  backendUrl = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) {
  }

  login(loginData: { email: string, password: string } | { username: string, password: string }) {
    return this.http.post<{
      access: string,
      refresh: string
      }>(this.backendUrl + '/auth/users/login/', loginData)
  }

  register(registrationData:
             { email: string, username: string, first_name: string, last_name: string, password: string }) {
    return this.http.post(this.backendUrl + '/auth/users/', registrationData)
  }

  logout(logoutData: { refresh: string }) {
    return this.http.post(this.backendUrl + '/auth/users/logout/', logoutData);
  }

  refreshToken(token: string) {
    return this.http.post<{
      access: string,
      refresh: string
    }>(this.backendUrl + '/auth/users/refresh/', {
      refresh: token
    }, this.httpOptions);
  }

  problem(){
    return this.http.get(this.backendUrl + '/problem/all/', this.httpOptions);
  }
}
