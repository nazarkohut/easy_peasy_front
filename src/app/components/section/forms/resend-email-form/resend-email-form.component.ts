import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {getEmailValidators} from "../../../../../assets/type-script/validators/fields/email";
import {AuthService} from "../../../../services/auth/auth.service";
import {getServerErrorText} from "../../../../../assets/type-script/error/server";
import {Router} from "@angular/router";

@Component({
  selector: 'app-resend-email',
  templateUrl: './resend-email-form.component.html',
  styleUrls: ['../auth-form.scss', './resend-email-form.component.scss']
})
export class ResendEmailFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', getEmailValidators())
  });
  errorMessage: string = '';

  constructor(private router: Router, public auth: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value)
    if (this.form.valid) {
      this.auth.resendActivation(this.form.value).subscribe({
        next: (data) => {
          console.log("data:", data);
          this.errorMessage = '';
          this.router.navigateByUrl('confirm-account'); // create new page for this
        },
        error: (err)=>{
          console.log("err", err);
          this.errorMessage = getServerErrorText(err?.error);
        }
      })
    }
  }

}
