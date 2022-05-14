import { Injectable } from '@angular/core';
import {backendUrl, httpOptions} from "../constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  constructor(private http: HttpClient) { }
  problem(){
    return this.http.get(backendUrl + '/problem/all/', httpOptions);
  }
}
