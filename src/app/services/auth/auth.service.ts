import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  backendUrl = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) {
  }

  login(loginData: {email: string, password: string} | {username: string, password: string}) {
    return this.http.post(this.backendUrl + '/auth/users/login/', loginData)
  }

  logout(logoutData: {refresh_token: string}) {
    return this.http.post(this.backendUrl + '/auth/users/logout/', logoutData);
  }
}

// import {Injectable} from '@angular/core';
// import {HttpClient} from "@angular/common/http";
//
// interface User {
//   email: string,
//   password: string,
//   username: string
// }
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthorizationService {
//
//   backendUrl = 'https://ani-game-backend.herokuapp.com'
//
//   constructor(private http: HttpClient) {
//   }
//
//   login(loginData: { email: string, password: string }) {
//     return this.http.post<{
//       access_token: string,
//       user: {
//         id: number,
//         username: string,
//         email: string,
//         rating: number,
//         image: string
//       }
//     }>(this.backendUrl + '/login', loginData)
//   }
//
//   registration(registrationData: { email: string, username: string, password: string }) {
//     return this.http.post<{
//       access_token: string,
//       user: {
//         id: number,
//         username: string,
//         email: string,
//         rating: number,
//         image: string
//       }
//     }>(this.backendUrl + '/registration', registrationData)
//   }
//
//   logout() {
//     return this.http.post(this.backendUrl + '/logout', {});
//   }
// }
