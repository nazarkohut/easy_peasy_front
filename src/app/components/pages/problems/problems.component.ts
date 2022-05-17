import {Component, OnInit} from '@angular/core';
import {ProblemService} from "../../../services/problem/problem.service";
import {ProblemComplexity} from "../../../../assets/type-script/enums/complexity";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-problem',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})

export class ProblemsComponent implements OnInit {
  problemComplexity = ProblemComplexity;
  form = new FormGroup({
    tags: new FormControl('')
  })

  constructor(public problem: ProblemService, private route: Router) {
  }
  problemsData: any = [];
  problemsActiveData: any = [];

  problemsColumns: string[] = ['position', 'task', 'complexity', 'Success Rate'];
  details: any = [];

  ngOnInit(): void {
    this.problem.getAllProblemsDetails().subscribe(data => {
      this.details = data;
      console.log(this.details);
    })
    this.problem.getAllProblems().subscribe(data => {
      this.problemsData = data;
      this.problemsActiveData = data;
      console.log(this.problemsData)
    })
  }

  onSelect(){
    console.log("form", this.form.value.tags.length)
    if (this.form.value.tags.length === 0){
      this.problemsActiveData = this.problemsData;
    } else{
      this.problem.getProblemsSortedByTags(this.form.value.tags).subscribe(data => {
        this.problemsActiveData = data;
      })
    }
  }
  OnProblemClick(id: string) {
    this.route.navigate(['problem/' + id]);
  }
}
