import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {getPasswordValidators} from "../../../../../assets/type-script/validators/fields/password";
import {AuthService, AuthUrl, ResetPasswordConfirm} from "../../../../services/auth/auth.service";
import {getServerErrorText} from "../../../../../assets/type-script/error/server";
import {getConfirmPasswordValidators} from "../../../../../assets/type-script/validators/fields/confirm_password";
import {
  updateConfirmFieldOnChange
} from "../../../../../assets/type-script/validators/fields/listeners/field-listeners";

@Component({
  selector: 'app-reset-password-confirm-form',
  templateUrl: './reset-password-confirm-form.component.html',
  styleUrls: ['../auth-form.scss', './reset-password-confirm-form.component.scss']
})
export class ResetPasswordConfirmFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    password: new FormControl('', getPasswordValidators(8)),
    confirm_password: new FormControl('', getConfirmPasswordValidators()),
  });

  params: AuthUrl = {uid: '', token: ''};
  errorMessage: string = '';

  constructor(private router: Router, private activeRoute: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.params = params as AuthUrl;
    });
    updateConfirmFieldOnChange(this.form);
  }

  formResetPasswordConfirmData(): ResetPasswordConfirm {
    return {'uid': this.params.uid, 'token': this.params.token, 'new_password': this.form.value.password}
  }

  onSubmit() {
    this.errorMessage = '';
    this.form.markAllAsTouched();
    if (this.form.valid) {
      let requestData = this.formResetPasswordConfirmData();
      console.log(requestData)
      this.authService.resetPasswordConfirm(requestData).subscribe({
        next: (data) => {
          this.router.navigateByUrl('password-changed/success');
        },
        error: (err) => {
          this.errorMessage = getServerErrorText(err?.error);
        }
      });
    }
  }
}
