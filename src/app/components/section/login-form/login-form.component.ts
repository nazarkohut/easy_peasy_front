import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth/auth.service";

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

  constructor(private auth: AuthService) {
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

  validateEmail() {
    return this.loginForm.controls.hasOwnProperty('email') &&
      (this.loginForm.get('email')?.invalid) && (this.form.get('email_or_username')?.dirty || this.form.get('email_or_username')?.touched)
  }

  validateUsername() {
    return this.loginForm.controls.hasOwnProperty('username') &&
      (this.loginForm.get('username')?.invalid && (this.form.get('email_or_username')?.dirty || this.form.get('email_or_username')?.touched))
  }

  validatePassword() {
    return this.loginForm.get('password')?.invalid && (this.form.get('password')?.dirty || this.form.get('password')?.touched)
  }

  onSubmit() {
    this.determineIfEmailOrUsername();
    this.auth.login(this.loginForm.value).subscribe((data) => {
      console.log("data", data);
    });

    console.log(this.loginForm.get('email'))
    console.log(this.loginForm.get('username'))
    console.log(this.loginForm.get('password'))
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

  getPasswordError(): string {
    if (this.loginForm.get('password')?.hasError('required')) {
      return 'This field is required';
    } else if (this.loginForm.get('password')?.hasError('minlength')) {
      return `Password must be at least ${this.loginForm.get('password')?.errors?.['minlength']?.['requiredLength']}
      characters long, your password have ${this.loginForm.get('password')?.errors?.['minlength']?.['actualLength']} characters`
    }
    return '';
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

  isAlphaNumeric(s: string) {
    let code, i, len;

    for (i = 0, len = s.length; i < len; i++) {
      code = s.charCodeAt(i);
      if (!(this.isNumeric(code)) || this.isAlpha(code)) {
        return false;
      }
    }
    return true;
  };

  isNumeric(code: number) {
    return (code > this.getASCII('0') && code < this.getASCII('9'));
  }

  isAlpha(code: number) {
    return (code > this.getASCII('A') && code < this.getASCII('Z')) ||
      (code > this.getASCII('a') && code < this.getASCII('z'));
  }

  getASCII(ch: string): number {
    return ch.charCodeAt(0);
  }
}
