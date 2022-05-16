import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProblemService} from "../../../services/problem/problem.service";

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {
  data: any = [];

  constructor(private route: Router, private activeRoute: ActivatedRoute, private problem: ProblemService) {
  }

  ngOnInit(): void {
    const id: string = String(this.activeRoute.snapshot.paramMap.get('id')); // change later (check if not null)
    this.problem.getParticularProblem(id).subscribe({
      next: (data) => {
        this.data = data;
        console.log(this.data)
      },
      error: (err =>{
        this.route.navigate(['not-found']);
      })
    })
  }
}
