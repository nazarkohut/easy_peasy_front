import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-password-validation',
  templateUrl: './password-validation.component.html',
  styleUrls: ['../validation-error-wrapper.scss', './password-validation.component.scss']
})
export class PasswordValidationComponent implements OnInit {
  @Input() loginForm: FormGroup = {} as FormGroup;
  @Input() form: FormGroup = {} as FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

  validatePassword() {
    return this.loginForm.get('password')?.invalid && (this.form.get('password')?.dirty || this.form.get('password')?.touched);
  }

  getPasswordError(): string {
    if (this.loginForm.get('password')?.hasError('required')) {
      return 'This field is required';
    } else if (this.loginForm.get('password')?.hasError('minlength')) {
      return `Password must be at least ${this.loginForm.get('password')?.errors?.['minlength']?.['requiredLength']}
      characters long, your password have ${this.loginForm.get('password')?.errors?.['minlength']?.['actualLength']} characters`;
    } else if (this.loginForm.get('password')?.hasError('maxlength')) {
      return `Password must be less than ${this.loginForm.get('password')?.errors?.['maxlength']?.['requiredLength']}
      characters long, your password have ${this.loginForm.get('password')?.errors?.['maxlength']?.['actualLength']} characters`
    } else if (this.loginForm.get('password')?.hasError('strongPassword')) {
      let strongPasswordError = this.loginForm.get('password')?.errors?.['strongPassword']
      if (strongPasswordError?.['containsLowerCaseChar'] || strongPasswordError?.['containsUpperCaseChar']) {
        return 'Password should contain both lower and upper case letters.'
      } else if (strongPasswordError?.['containsNumber']) {
        return 'Password should have at least 1 number'
      } else if (strongPasswordError?.['containsSpecialChar']) {
        return 'Password should contain at least 1 special character like \'%, *, /, @, ! \' '
      }
    }
    return '';
  }
}
