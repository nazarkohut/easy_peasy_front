import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {getPasswordValidators} from "../../../../../assets/type-script/validators/fields/password";
import {getEmailValidators} from "../../../../../assets/type-script/validators/fields/email";
import {getUsernameValidators} from "../../../../../assets/type-script/validators/fields/username";
import {getLastNameValidators} from "../../../../../assets/type-script/validators/fields/last_name";
import {getFirstNameValidators} from "../../../../../assets/type-script/validators/fields/first_name";
import {AuthService} from "../../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {getServerErrorText} from "../../../../../assets/type-script/error/server";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['../auth-form.scss', '../../input-validation/validation-error-wrapper.scss', './register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', getEmailValidators()),
    username: new FormControl('', getUsernameValidators()),
    first_name: new FormControl('', getFirstNameValidators()),
    last_name: new FormControl('', getLastNameValidators()),
    password: new FormControl('', getPasswordValidators()),
    confirm_password: new FormControl('', [Validators.required, this.confirmPasswordValidator()])
  });
  errorMessage: string = '';

  constructor(private router: Router, private auth: AuthService) {
  }

  confirmPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      let areEqual = this.form.value?.password === value;
      return !areEqual ? {passwordDoesNotMatch: true} : null;
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.errorMessage = String();
    this.form.markAllAsTouched();
    if (this.form.invalid){
      return
    }
    this.auth.register(this.form.value).subscribe(
      {
        next: (data) => {
          this.router.navigate(['/confirm-account']);
        },
        error: (error) => {
          let error_data = error?.error;
          this.errorMessage = getServerErrorText(error_data);
        }
      });
    console.log(this.form);
  }

}
