import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {getPasswordValidators} from "../../../../assets/type-script/validators/fields/password";
import {strongPasswordValidator} from "../../../../assets/type-script/validators/custom/strong-password-validator";
import {getConfirmPasswordValidators} from "../../../../assets/type-script/validators/fields/confirm_password";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup = new FormGroup({
    current_password: new FormControl('', [...getPasswordValidators(8), strongPasswordValidator()]),
    new_password: new FormControl('', [...getPasswordValidators(8), strongPasswordValidator()]),
    confirm_password: new FormControl('', []), // getConfirmPasswordValidators()
    // have to make changes in confirm password validator to make this one work
  });

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid){
      this.userService.changePassword(this.form.value).subscribe(
        {
          next: (data) => {
            console.log("response data:", data);
          },
          error: (error) => {
            console.log("Error:", error)
          }
        }
      )
    }
  }
}
