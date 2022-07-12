import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-password-changed-success-form',
  templateUrl: './password-changed-success-form.component.html',
  styleUrls: ['../auth-form.scss', './password-changed-success-form.component.scss']
})
export class PasswordChangedSuccessFormComponent implements OnInit {
  redirectButton: Array<{text: string, link: string}> = [{text: "Back to login", link: "login"}]
  switch: boolean = true;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onSmileClick(){
    this.switch = !this.switch;
  }
}
