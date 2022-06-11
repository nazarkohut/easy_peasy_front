import {Component, OnInit} from '@angular/core';
import {ProblemService} from "../../../services/problem/problem.service";
import {ProblemComplexity} from "../../../../assets/type-script/enums/complexity";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {backendUrl, httpOptions} from "../../../services/constants";

export interface Tag {
  id: String,
  tag: String
}

export interface Subtopic {
  id: number,
  name: string
}

export interface Topic {
  id: number,
  name: string,
  sub_topics: Array<Subtopic>
}

export interface SubtopicProblems {
  id: number,
  name: string,
  problems: Array<any>
}


@Component({
  selector: 'app-problem',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})

export class ProblemsComponent implements OnInit {
  problemComplexity = ProblemComplexity;
  form = new FormGroup({
    tags: new FormControl(''),
    topics: new FormControl(''),
    subtopics: new FormControl('')
  })

  constructor(public problem: ProblemService, private route: Router) {
  }

  problemsData: any = [];
  problemsActiveData: any = [];

  problemsColumns: string[] = ['position', 'task', 'complexity', 'Success Rate'];
  details: any = {tags: [], topics: []} as { tags: Array<Tag>, topics: Array<Topic> }


  ngOnInit(): void {
    this.getDetails();
    this.problem.getAllProblems().subscribe(data => {
      this.problemsData = data;
      this.problemsActiveData = data;
      // console.log(this.problemsData)
    })
    // this.getDetails();
    console.log("details man:", this.details)
    this.form.controls['subtopics'].disable()
  }

  onTagsSelect() {
    console.log("Here", this.form.value.tags)
    // console.log("form", this.form.value.tags.length)
    if (this.form.value.tags.length === 0) {
      this.problemsActiveData = this.problemsData;
      this.form.controls['topics'].enable();
      // this.form.controls['subtopics'].enable(); // create two functions for enabling and disabling multiple fields
    } else {
      this.problem.getProblemsSortedByTags(this.form.value.tags).subscribe(data => {
        this.problemsActiveData = data;
      })
      this.form.controls['topics'].disable();
      this.form.controls['subtopics'].disable();
    }
  }

  onTopicsSelect() {
    console.log("topic from form", this.form.value.topics)
    if (this.form.value.topics.length === 0) {
      this.form.controls['tags'].enable()
      this.form.controls['subtopics'].disable()
    } else {
      this.form.controls['tags'].disable()
      this.form.controls['subtopics'].enable()
    }
  }

  onSubtopicSelect() {
    const subtopic = this.form.value.subtopics;
    if (subtopic && subtopic.length !== 0) {
      this.problem.getSubtopicProblems(this.form.value.subtopics).subscribe(data => {
        console.log("data", data)
        data.forEach(problem => {
          this.problemsActiveData = problem.problems;
        })
      })
    } else {
      this.problemsActiveData = this.problemsData;
    }

  }

  OnProblemClick(id: string) {
    this.route.navigate(['problem/' + id]);
  }

  getDetails() {

    this.problem.getAllProblemsTags().subscribe({
      next: (tags) => {
        this.details.tags = tags.tags;
      }
    })

    this.problem.getAllProblemsTopics().subscribe({
      next: allTopics => {
        this.details['topics'] = allTopics;
      }
    })

  }

  clearTopics() {
    this.form.controls['subtopics'].setValue('');
    this.form.controls['tags'].enable()
    this.form.controls['subtopics'].disable()
  }

}
