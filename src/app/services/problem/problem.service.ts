import {Injectable} from '@angular/core';
import {backendUrl, httpOptions} from "../constants";
import {HttpClient, HttpParams} from "@angular/common/http";

export interface AllProblems {
  id: number,
  task: string,
  complexity: number,
  accepted: number,
  attempts: number
}

export interface ParticularProblem {
  accepted: number,
  attempts: number,
  complexity: number,
  condition: string,
  id: number,
  images: Array<string>,
  tags: Array<string>,
  task: string
}

@Injectable({
  providedIn: 'root'
})

export class ProblemService {

  constructor(private http: HttpClient) {
  }

  getAllProblems() {
    return this.http.get<[AllProblems]>(backendUrl + '/problem/all/', httpOptions);
  }

  getAllProblemsDetails(){
    return this.http.get(backendUrl + '/problem/details/', httpOptions);
  }

  getProblemsSortedByTag(ids: Array<number>){
    let queryParams = new HttpParams();
    queryParams = queryParams.appendAll({'tag_id': ids});
    console.log("params: ", queryParams.toString())
    return this.http.get(backendUrl + '/tags/tag?' + queryParams.toString(), httpOptions);
  }

  getParticularProblem(id: string) {
    return this.http.get<[ParticularProblem]>(backendUrl + '/problem/' + id, httpOptions);
  }
}
