import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  // @ViewChild('error') error: ElementRef;
  errorMessage: string = '';

  constructor(private router: Router, private auth: AuthService) {
    // this.error = {} as ElementRef;
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
          // if (error_data.hasOwnProperty('detail')) {
          //   // console.log(this.error);
          //   this.error.nativeElement.textContent = getServerErrorText(error_data?.detail);
          // } else if (error_data.hasOwnProperty('non_field_errors')) {
          //   console.log(this.error);
          //   this.error.nativeElement.textContent = getServerErrorText(error_data?.non_field_errors);
          // }
          // console.log(error);
          // console.log(error?.error?.detail);
          // console.log(error?.error?.non_field_errors?.[0]);
        }
      });
    console.log(this.form);
  }

}
