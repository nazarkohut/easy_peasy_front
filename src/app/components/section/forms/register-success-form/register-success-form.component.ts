import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RedirectButton} from "../../../../../assets/type-script/UI-interfaces/redirect-button";

@Component({
  selector: 'app-register-success-form',
  templateUrl: './register-success-form.component.html',
  styleUrls: ['../auth-form.scss', './register-success-form.component.scss']
})
export class RegisterSuccessFormComponent implements OnInit {
  redirectButton: Array<RedirectButton> = [{text: 'Resend email', link: 'resend/email'}];
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
