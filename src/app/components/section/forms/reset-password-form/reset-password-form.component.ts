import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {getEmailValidators} from "../../../../../assets/type-script/validators/fields/email";
import {AuthService} from "../../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {getServerErrorText} from "../../../../../assets/type-script/error/server";

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['../auth-form.scss', './reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', getEmailValidators())
  });
  errorMessage: string = '';

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.errorMessage = '';
    this.form.markAllAsTouched();
    if (this.form.valid){
      this.authService.resetPassword(this.form.value).subscribe({
        next: (data) => {
          this.router.navigateByUrl('email-send/success')
        },
        error: (err) =>{
          this.errorMessage = getServerErrorText(err?.error);
        }
      })
    }

  }

}
