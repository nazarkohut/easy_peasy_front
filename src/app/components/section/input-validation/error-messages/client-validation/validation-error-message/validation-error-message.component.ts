import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-validation-error-message',
  templateUrl: './validation-error-message.component.html',
  styleUrls: ['./validation-error-message.component.scss']
})
export class ValidationErrorMessageComponent implements OnInit {
  @Input() messageText: string = '';
  // @Input() fieldName: string = '';
  // @ViewChild('') p: ElementRef;
  constructor() { }

  ngOnInit(): void {
    // if (this.fieldName === 'first_name' || this.fieldName === 'last_name'){
    //
    // }
  }
}
