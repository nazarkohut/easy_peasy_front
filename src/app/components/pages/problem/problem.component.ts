import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {

  constructor(public auth: AuthService) {
    // this.auth.problem().subscribe()
  }

  ngOnInit(): void {
    this.auth.problem().subscribe()
  }

  ngAfterViewInit(){
    this.auth.problem()
  }

}
