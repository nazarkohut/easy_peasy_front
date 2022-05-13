import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {getPasswordValidators} from "../../../../../assets/type-script/validators/fields/password";
import {getUsernameValidators} from "../../../../../assets/type-script/validators/fields/username";
import {getEmailValidators} from "../../../../../assets/type-script/validators/fields/email";
import {getServerErrorText} from "../../../../../assets/type-script/error/server";
import {CookieService} from "../../../../services/jwt/cookie/cookie.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../auth-form.scss', './login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @ViewChild('error') error: ElementRef;
  form: FormGroup = new FormGroup({
    email_or_username: new FormControl(''),
    password: new FormControl('')
  });

  loginForm: FormGroup = new FormGroup({})
  obj = Object
  constructor(private router: Router, private auth: AuthService, private cookie: CookieService) {
    this.error = {} as ElementRef;
  }

  determineIfEmailOrUsername(): FormGroup {
    let emailOrUsername: string = this.form.value.email_or_username;
    let password: string = this.form.value.password;
    if (emailOrUsername && emailOrUsername.includes('@')) {
      this.createLoginForm('email', emailOrUsername, password)
      this.loginForm.removeControl('username');
      return this.loginForm;
    }
    this.createLoginForm('username', emailOrUsername, password);
    this.loginForm.removeControl('email');
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
      return new FormControl(emailOrUsername,
        getEmailValidators());
    }
    return new FormControl(emailOrUsername,
      getUsernameValidators());
  }

  getPasswordControl(password: string): FormControl {
    return new FormControl(password,
      getPasswordValidators());
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.determineIfEmailOrUsername();
    this.error.nativeElement.textContent = String();
    this.form.markAllAsTouched();
    if (this.loginForm.invalid) {
      return
    }
    this.auth.login(this.loginForm.value).subscribe(
      {
        next: (data) => {
          this.cookie.setAllCookies(data.access, data.refresh);
          this.router.navigate(['/problem']);
        },
        error: (error) => {
          let error_data = error?.error;
          if (error_data.hasOwnProperty('detail')) {
            this.error.nativeElement.textContent = getServerErrorText(error_data?.detail);
          } else if (error_data.hasOwnProperty('non_field_errors')) {
            this.error.nativeElement.textContent = getServerErrorText(error_data?.non_field_errors);
          }
        }
      });
  }
}
