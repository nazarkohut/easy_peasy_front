import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.scss']
})
export class FormTextComponent implements OnInit {
  @Input() type: string = '';
  @Input() linkTo: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }
}
