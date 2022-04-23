import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-password-validation',
  templateUrl: './password-validation.component.html',
  styleUrls: ['./password-validation.component.scss']
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
      characters long, your password have ${this.loginForm.get('password')?.errors?.['minlength']?.['actualLength']} characters`
    }
    return '';
  }
}
