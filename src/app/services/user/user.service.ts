import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {backendUrl} from "../constants";

export interface ChangePasswordData {
  current_password: string,
  new_password: string,
  confirm_password: string
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
  }

  changePassword(data: ChangePasswordData) {
    return this.http.post(backendUrl + '/auth/users/set_password/', data);
  }
}
