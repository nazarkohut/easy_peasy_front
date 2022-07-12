import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-email-sent-success-form',
  templateUrl: './email-sent-success-form.component.html',
  styleUrls: ['../auth-form.scss', './email-sent-success-form.component.scss']
})
export class EmailSentSuccessFormComponent implements OnInit {
  redirectButton: Array<{text: string, link: string}> = [{text: "Back to login", link: "login"}];
  switch: boolean = true;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onSmileClick(){
    this.switch = !this.switch;
  }

}
