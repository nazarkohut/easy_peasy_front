import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-email-validation',
  templateUrl: './login-email-validation.component.html',
  styleUrls: ['../../validation-error-wrapper.scss', './login-email-validation.component.scss']
})
export class LoginEmailValidationComponent implements OnInit {
  @Input() loginForm: FormGroup = {} as FormGroup;
  @Input() form: FormGroup = {} as FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  validateEmail() {
    return this.loginForm.controls.hasOwnProperty('email') &&
      (this.loginForm.get('email')?.invalid) && (this.form.get('email_or_username')?.dirty || this.form.get('email_or_username')?.touched)
  }

  getEmailError(): string {
    if (this.loginForm.get('email')?.hasError('required')) {
      return 'This field is required';
    } else if (this.loginForm.get('email')?.hasError('maxlength')) {
      return `Email must not be greater than ${this.loginForm.get('email')?.errors?.['maxlength']?.['requiredLength']}
      characters long, your email have ${this.loginForm.get('email')?.errors?.['maxlength']?.['actualLength']} characters`
    } else if (this.loginForm.get('email')?.hasError('email')) {
      return 'Email is not valid';
    }
    return '';
  }
}
