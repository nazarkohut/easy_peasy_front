import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-validation-error-message',
  templateUrl: './validation-error-message.component.html',
  styleUrls: ['./validation-error-message.component.scss']
})
export class ValidationErrorMessageComponent implements OnInit {
  @Input() messageText: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
