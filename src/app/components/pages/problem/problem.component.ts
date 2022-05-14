import { Component, OnInit } from '@angular/core';
import {ProblemService} from "../../../services/problem/problem.service";

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {

  constructor(public problem: ProblemService) {
  }

  ngOnInit(): void {
    this.problem.problem().subscribe()
  }

}
