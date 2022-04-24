import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {getPasswordValidators} from "../../../../../assets/type-script/validators/password";
import {getEmailValidators} from "../../../../../assets/type-script/validators/email";
import {getUsernameValidators} from "../../../../../assets/type-script/validators/username";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['../../auth-form.scss', './register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', getEmailValidators()),
    username: new FormControl('', getUsernameValidators()),
    first_name: new FormControl('', []),
    last_name: new FormControl('', []),
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
