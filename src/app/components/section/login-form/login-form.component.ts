import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../auth-form.scss', './login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @ViewChild('error') error: ElementRef<HTMLDivElement>;
  form: FormGroup = new FormGroup({
    email_or_username: new FormControl(''),
    password: new FormControl('')
  });

  loginForm: FormGroup = new FormGroup({})

  constructor(private auth: AuthService) {
    this.error = {} as ElementRef<HTMLDivElement>;
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
        [Validators.required, Validators.email, Validators.maxLength(254)]);
    }
    return new FormControl(emailOrUsername,
      [Validators.required, Validators.maxLength(128), this.alphaNumericValidator()]);
  }

  getPasswordControl(password: string): FormControl {
    return new FormControl(password,
      [Validators.required, Validators.minLength(6), Validators.maxLength(64)]);
  }

  ngOnInit(): void {

  }

  getServerErrorText(errorValue: any): string{
    console.log("Erororororo", errorValue)
    if(typeof (errorValue) === 'string'){
      return errorValue
    } else if (typeof (errorValue) === 'object'){
      return errorValue?.[0]
    }
    return String();
  }

  onSubmit() {
    this.determineIfEmailOrUsername();
    this.error.nativeElement.textContent = String();
    this.form.markAllAsTouched();
    this.auth.login(this.loginForm.value).subscribe((data) => {
      console.log("data", data);
    }, (error) => {
      let error_data = error?.error;
      if (error_data.hasOwnProperty('detail')) {
        this.error.nativeElement.textContent = this.getServerErrorText(error_data?.detail);
      } else if (error_data.hasOwnProperty('non_field_errors')){
        this.error.nativeElement.textContent = this.getServerErrorText(error_data?.non_field_errors);
      }
      console.log(error);
      console.log(error?.error?.detail);
      console.log(error?.error?.non_field_errors?.[0]);
    });

    console.log(this.loginForm.get('email'))
    console.log(this.loginForm.get('username'))
    console.log(this.loginForm.get('password'))
  }

  alphaNumericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const isValueValid = this.isAlphaNumeric(value);
      return !isValueValid ? {alphaNumeric: {containsAlphaNumeric: true} } : null;
    }
  }
  // custom validator
  isAlphaNumeric(s: string) {
    let code, i, len;

    for (i = 0, len = s.length; i < len; i++) {
      code = s.charCodeAt(i);
      if (!((this.isNumeric(code)) || this.isAlpha(code)) ) {
        return false;
      }
    }
    return true;
  };

  isNumeric(code: number) {
    return (code >= this.getASCII('0') && code <= this.getASCII('9'));
  }

  isAlpha(code: number) {
    return (code >= this.getASCII('A') && code <= this.getASCII('Z')) ||
      (code >= this.getASCII('a') && code <= this.getASCII('z'));
  }

  getASCII(ch: string): number {
    return ch.charCodeAt(0);
  }
}
