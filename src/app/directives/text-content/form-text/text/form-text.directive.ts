import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appFormText]'
})
export class FormTextDirective {
  @Input() appFormText: string = '';

  Texts: any = {
    'login': "Do not have an account? ",
    'registration': "Have an account? ",
    'forgot-password': "Forgot password?"
  }

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(){
    this.el.nativeElement.className += ` ${this.appFormText}`;
    this.el.nativeElement.innerHTML = this.Texts[this.appFormText] + this.el.nativeElement.innerHTML;
  }
}
