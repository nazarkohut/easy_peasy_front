import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RedirectButton} from "../../../../../assets/type-script/UI-interfaces/redirect-button";

@Component({
  selector: 'app-password-changed-success-form',
  templateUrl: './password-changed-success-form.component.html',
  styleUrls: ['../auth-form.scss', './password-changed-success-form.component.scss']
})
export class PasswordChangedSuccessFormComponent implements OnInit {
  redirectButton: Array<RedirectButton> = [{text: "Back to login", link: "login"}]
  switch: boolean = true;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onSmileClick(){
    this.switch = !this.switch;
  }
}
