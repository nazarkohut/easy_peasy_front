import {Injectable} from '@angular/core';
import {backendUrl, httpOptions} from "../constants";
import {HttpClient, HttpParams} from "@angular/common/http";
import {SubtopicProblems, Tag} from "../../components/pages/problems/problems.component";

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

export interface AllProblemsTags {
  tags: Array<Tag>;
}

@Injectable({
  providedIn: 'root'
})

export class ProblemService {

  constructor(private http: HttpClient) {
  }

  getAllProblems() {
    return this.http.get<[AllProblems]>(backendUrl + '/problem/all/');
  }

  getAllProblemsTags() {
    return this.http.get<AllProblemsTags>(backendUrl + '/tags/all/', httpOptions);
  }

  getAllProblemsTopics() {
    return this.http.get(backendUrl + '/topic/', httpOptions);
  }

  getProblemsSortedByTags(ids: Array<number>) {
    let queryParams = new HttpParams();
    queryParams = queryParams.appendAll({'tag_id': ids});
    console.log("params: ", queryParams.toString())
    return this.http.get(backendUrl + '/tags/tag?' + queryParams.toString(), httpOptions);
  }

  getParticularProblem(id: string) {
    return this.http.get<ParticularProblem>(backendUrl + '/problem/' + id, httpOptions);
  }

  getSubtopicProblems(id: string){
    return this.http.get<[SubtopicProblems]>(backendUrl + '/topic/subtopic/' + id, httpOptions);
  }
}
