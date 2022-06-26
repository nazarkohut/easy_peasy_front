import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-success-form',
  templateUrl: './register-success-form.component.html',
  styleUrls: ['../auth-form.scss', './register-success-form.component.scss']
})
export class RegisterSuccessFormComponent implements OnInit {
  redirectButton: Array<{ text: string, link: string }> = [{text: 'Resend email', link: 'resend/email'}];
  constructor() { }

  ngOnInit(): void {
  }

}
