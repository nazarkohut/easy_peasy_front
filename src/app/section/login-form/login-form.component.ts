import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../auth-form.scss', './login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email_or_username: new FormControl(''),
    password: new FormControl('')
  });

  loginForm: FormGroup = new FormGroup({})

  constructor() {
  }

  determineIfEmailOrUsername(): FormGroup {
    let emailOrUsername: string = this.form.value.email_or_username;
    let password: string = this.form.value.password;
    console.log("email or username", emailOrUsername)
    if (emailOrUsername && emailOrUsername.includes('@')) {
      this.createLoginForm('email', emailOrUsername, password)
      this.loginForm.removeControl('username');
      console.log("this.loginForm: ", this.loginForm.value)
      console.log("this.form: ", this.form.value)
      console.log('check contains', this.loginForm.contains('email'));
      return this.loginForm;
    }
    this.createLoginForm('username', emailOrUsername, password);
    this.loginForm.removeControl('email');
    console.log("this.loginForm: ", this.loginForm.value)
    console.log("this.form: ", this.form.value)
    console.log('check contains', this.loginForm.contains('email'));
    return this.loginForm;
  }

  createLoginForm(type: string, emailOrUsername: string, password: string) {
    if (this.loginForm.contains(type)) {
      this.loginForm.setControl(type, this.getEmailOrUsernameControl(type, emailOrUsername));
      this.loginForm.setControl('password', this.getPasswordControl(password));
    } else {
      this.loginForm.addControl(type, this.getEmailOrUsernameControl(type, emailOrUsername));
      this.loginForm.addControl('password', this.getPasswordControl(password));
    }
  }

  getEmailOrUsernameControl(type: string, emailOrUsername: string): FormControl {
    if (type === 'email') {
      return new FormControl(emailOrUsername, [Validators.required, Validators.email]);
    }
    return new FormControl(emailOrUsername, [Validators.required]);
  }

  getPasswordControl(password: string): FormControl {
    return new FormControl(password,
      [Validators.required, Validators.minLength(6), Validators.required]);
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.determineIfEmailOrUsername();
  }

}
