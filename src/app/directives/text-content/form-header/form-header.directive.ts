import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appFormHeader]'
})
export class FormHeaderDirective {
  @Input() appFormHeader: string = '';
  Texts: any = {
    'login': 'Sign In',
    'registration': 'Registration',
    'registration_success': 'Thank you for registration'
  }

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(){
    this.el.nativeElement.className += ` ${this.appFormHeader}`;
    this.el.nativeElement.textContent = this.Texts[this.appFormHeader];
  }
}
