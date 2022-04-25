import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {getPasswordValidators} from "../../../../../assets/type-script/validators/fields/password";
import {getEmailValidators} from "../../../../../assets/type-script/validators/fields/email";
import {getUsernameValidators} from "../../../../../assets/type-script/validators/fields/username";
import {getLastNameValidators} from "../../../../../assets/type-script/validators/fields/last_name";
import {getFirstNameValidators} from "../../../../../assets/type-script/validators/fields/first_name";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['../../auth-form.scss', '../../input-validation/validation-error-wrapper.scss', './register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', getEmailValidators()),
    username: new FormControl('', getUsernameValidators()),
    first_name: new FormControl('', getFirstNameValidators()),
    last_name: new FormControl('', getLastNameValidators()),
    password: new FormControl('', getPasswordValidators()),
    confirm_password: new FormControl('', [Validators.required])
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form);
  }

}
