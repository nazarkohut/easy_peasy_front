import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-confirm-password-validation',
  templateUrl: './confirm-password-validation.component.html',
  styleUrls: ['./confirm-password-validation.component.scss']
})
export class ConfirmPasswordValidationComponent implements OnInit {
  @Input() form: FormGroup = {} as FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

  validateConfirmPassword() {
    return this.form.get('confirm_password')?.invalid && (this.form.get('confirm_password')?.dirty || this.form.get('confirm_password')?.touched);
  }
  // once you may create decorator for all validations;
  getConfirmPasswordError(): string {
    if (this.form.get('confirm_password')?.hasError('required')) {
      return 'This field is required';
    } else if (this.form.get('confirm_password')?.hasError('minlength')) {
      return `Password must be at least ${this.form.get('confirm_password')?.errors?.['minlength']?.['requiredLength']}
      characters long, your password have ${this.form.get('password')?.errors?.['minlength']?.['actualLength']} characters`;
    } else if (this.form.get('confirm_password')?.hasError('maxlength')) {
      return `Password must be at least ${this.form.get('confirm_password')?.errors?.['maxlength']?.['requiredLength']}
      characters long, your password have ${this.form.get('confirm_password')?.errors?.['maxlength']?.['actualLength']} characters`
    }
    if (this.form.get('confirm_password')?.hasError('passwordDoesNotMatch')){
      return 'Passwords do not match.'
    }
    return '';
  }

}
