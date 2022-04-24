import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-username-validation',
  templateUrl: './login-username-validation.component.html',
  styleUrls: ['../validation-error-wrapper.scss', './login-username-validation.component.scss']
})
export class LoginUsernameValidationComponent implements OnInit {
  @Input() loginForm: FormGroup = {} as FormGroup;
  @Input() form: FormGroup = {} as FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
  validateUsername() {
    return this.loginForm.controls.hasOwnProperty('username') &&
      (this.loginForm.get('username')?.invalid && (this.form.get('email_or_username')?.dirty || this.form.get('email_or_username')?.touched))
  }

  getUsernameError(): string {
    if (this.loginForm.get('username')?.hasError('required')) {
      return 'This field is required';
    } else if (this.loginForm.get('username')?.hasError('maxlength')) {
      return `Username must not be greater than ${this.loginForm.get('username')?.errors?.['maxlength']?.['requiredLength']}
      characters long, your username have ${this.loginForm.get('username')?.errors?.['maxlength']?.['actualLength']} characters`;
    } else if (this.loginForm.get('username')?.hasError('alphaNumeric')){
      return 'Username can contain only alphanumeric characters';
    }
    return '';
  }

}
