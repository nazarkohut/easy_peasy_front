import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.scss']
})
export class FormTextComponent implements OnInit {
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() linkText: string = '';
  @Input() paddingBottom: string = '';
  @ViewChild('formText') p: ElementRef<HTMLParagraphElement>;

  PADDINGS: any = {
    'login': '25px',
    'register': '30px'
  }

  constructor() {
    this.p = {} as ElementRef;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.p.nativeElement.style.paddingBottom = this.PADDINGS[this.paddingBottom];
  }
}
