import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {getPasswordValidators} from "../../../../../assets/type-script/validators/fields/password";
import {AuthService, ResetPasswordConfirm} from "../../../../services/auth/auth.service";
import {getServerErrorText} from "../../../../../assets/type-script/error/server";

@Component({
  selector: 'app-reset-password-confirm-form',
  templateUrl: './reset-password-confirm-form.component.html',
  styleUrls: ['../auth-form.scss', './reset-password-confirm-form.component.scss']
})
export class ResetPasswordConfirmFormComponent implements OnInit {
  form: FormGroup = new FormGroup({ // this form may be changed later in order
    // to not create new object and use this one instead
    password: new FormControl('', getPasswordValidators(8)),
    confirm_password: new FormControl('', [Validators.required, this.confirmPasswordValidator()]), // add validators
  });

  params: { uid: string, token: string } = {uid: '', token: ''};
  errorMessage: string = '';

  constructor(private router: Router, private activeRoute: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.params = params as { uid: string, token: string };
    });
  }

  formResetPasswordConfirmData(): ResetPasswordConfirm {
    return {'uid': this.params.uid, 'token': this.params.token, 'new_password': this.form.value.password}
  }

  onSubmit() {
    this.errorMessage = '';
    this.form.markAllAsTouched();
    console.log(this.form);
    if (this.form.valid) {
      let requestData = this.formResetPasswordConfirmData();
      console.log(requestData)
      this.authService.resetPasswordConfirm(requestData).subscribe({
        next: (data) => {
          this.router.navigateByUrl('login'); // temporary;
        },
        error: (err) => {
          this.errorMessage = getServerErrorText(err?.error);
        }
      });
    }
  }

  confirmPasswordValidator(): ValidatorFn { // this validator is inside registration(so it is better to make it general)
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      let areEqual = this.form.value?.password === value;
      return !areEqual ? {passwordDoesNotMatch: true} : null;
    }
  }

}
