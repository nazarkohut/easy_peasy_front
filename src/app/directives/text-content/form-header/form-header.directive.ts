import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appFormHeader]'
})
export class FormHeaderDirective {
  @Input() appFormHeader: string = '';
  Texts: any = {
    'login': 'Sign In',
    'registration': 'Registration',
    'registration_success': 'Thank you for registration',
    'account_activation': 'Congratulations',
    'resend_email_form': "Re-send Account Activation Email",
    'reset-password': "Forgot password",
    'reset-password-confirm': "Set new password",
    'email-sent-success': 'Congratulations',
    'password-changed': 'Password changed successfully'
  }

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(){
    this.el.nativeElement.className += ` ${this.appFormHeader}`;
    this.el.nativeElement.textContent = this.Texts[this.appFormHeader];
  }
}
