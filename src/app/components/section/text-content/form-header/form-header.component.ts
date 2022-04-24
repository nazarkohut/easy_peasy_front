import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.scss']
})


export class FormHeaderComponent implements OnInit {
  @Input() text: string = '';
  @Input() paddingTop: string = '';
  @ViewChild('formHeader') p: ElementRef<HTMLParagraphElement>;
  PADDINGS: any = {
    'login': '25px',
    'register': '30px'
  }

  constructor() {
    this.p = {} as ElementRef;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.p.nativeElement.style.paddingTop = this.PADDINGS[this.paddingTop];
  }
}
