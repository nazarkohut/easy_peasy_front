import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register-text-validation',
  templateUrl: './register-text-validation.component.html',
  styleUrls: ['./register-text-validation.component.scss']
})
export class RegisterTextValidationComponent implements OnInit {
  @Input() form: FormGroup = {} as FormGroup;
  @Input() fieldName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  validateTextField() {
    return this.form.controls.hasOwnProperty(this.fieldName) &&
      (this.form.get(this.fieldName)?.invalid && (this.form.get(this.fieldName)?.dirty || this.form.get(this.fieldName)?.touched))
  }

  getTextFieldError(): string {
    if (this.form.get(this.fieldName)?.hasError('required')) {
      return 'This field is required';
    } else if (this.form.get(this.fieldName)?.hasError('maxlength')) {
      return `${this.fieldName} must not be greater than ${this.form.get(this.fieldName)?.errors?.['maxlength']?.['requiredLength']}
      characters long, your username have ${this.form.get(this.fieldName)?.errors?.['maxlength']?.['actualLength']} characters`;
    } else if (this.form.get(this.fieldName)?.hasError('alphaNumeric')){
      return `${this.fieldName} can contain only alphanumeric characters`;
    }
    return '';
  }
}
