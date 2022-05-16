import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appComplexity]'
})
export class ComplexityDirective {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.el.nativeElement.className += ` ${this.el.nativeElement.textContent}`;
  }

}
