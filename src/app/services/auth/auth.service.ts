import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {backendUrl, httpOptions} from "../constants";

export interface RegistrationData {
  email: string,
  username: string,
  first_name: string,
  last_name: string,
  password: string
}

export interface UsernameLoginRequestData {
  username: string,
  password: string
}

export interface EmailLoginRequestData {
  email: string,
  password: string
}

export interface AccessRefreshTokens {
  access: string,
  refresh: string
}

export interface AccountActivation {
  uid: string,
  token: string
}

export interface ResendAccountActivation {
  email: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(loginData: EmailLoginRequestData | UsernameLoginRequestData) {
    return this.http.post<AccessRefreshTokens>(backendUrl + '/auth/users/login/', loginData)
  }

  register(registrationData:
             { email: string, username: string, first_name: string, last_name: string, password: string }) {
    return this.http.post(backendUrl + '/auth/users/', registrationData)
  }

  logout(logoutData: { refresh: string }) {
    return this.http.post(backendUrl + '/auth/users/logout/', logoutData);
  }

  refreshToken(token: string) {
    return this.http.post<AccessRefreshTokens>(backendUrl + '/auth/users/refresh/', {
      refresh: token
    }, httpOptions);
  }

  activateAccount(activationData: AccountActivation) {
    return this.http.post(backendUrl + '/auth/users/activation/', activationData, httpOptions)
  }

  resendActivation(resendActivationData: ResendAccountActivation){
    return this.http.post(backendUrl + '/auth/users/resend_activation/', resendActivationData)
  }
}
