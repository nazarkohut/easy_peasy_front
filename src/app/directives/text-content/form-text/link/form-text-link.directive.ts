import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appFormTextLink]'
})
export class FormTextLinkDirective {
  @Input() appFormTextLink: string = '';

  constructor(private el: ElementRef) {
  }

  Texts: any = {
    'registration': "Create an account",
    'login': "Sign In",
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.el.nativeElement.textContent = this.Texts[this.appFormTextLink];
  }
}
