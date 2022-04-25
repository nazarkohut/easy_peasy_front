import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-email-validation',
  templateUrl: './email-validation.component.html',
  styleUrls: ['../validation-error-wrapper.scss', './email-validation.component.scss']
})
export class EmailValidationComponent implements OnInit {
  @Input() form: FormGroup = {} as FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  validateEmail() {
    return this.form.controls.hasOwnProperty('email') &&
      (this.form.get('email')?.invalid) && (this.form.get('email')?.dirty || this.form.get('email')?.touched)
  }

  getEmailError(): string {
    if (this.form.get('email')?.hasError('required')) {
      return 'This field is required';
    } else if (this.form.get('email')?.hasError('maxlength')) {
      return `Email must not be greater than ${this.form.get('email')?.errors?.['maxlength']?.['requiredLength']}
      characters long, your email have ${this.form.get('email')?.errors?.['maxlength']?.['actualLength']} characters`
    } else if (this.form.get('email')?.hasError('email')) {
      return 'Email is not valid';
    }
    return '';
  }

}
