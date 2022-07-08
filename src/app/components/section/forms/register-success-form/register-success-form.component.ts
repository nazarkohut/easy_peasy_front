import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-success-form',
  templateUrl: './register-success-form.component.html',
  styleUrls: ['../auth-form.scss', './register-success-form.component.scss']
})
export class RegisterSuccessFormComponent implements OnInit {
  redirectButton: Array<{ text: string, link: string }> = [{text: 'Resend email', link: 'resend/email'}];
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
