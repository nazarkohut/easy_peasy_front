import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-validation-error-message',
  templateUrl: './server-validation-error-message.component.html',
  styleUrls: ['./server-validation-error-message.component.scss']
})
export class ServerValidationErrorMessageComponent implements OnInit {
  @Input() messageText: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
