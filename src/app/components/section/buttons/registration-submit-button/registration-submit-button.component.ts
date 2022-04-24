import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-registration-submit-button',
  templateUrl: './registration-submit-button.component.html',
  styleUrls: ['../auth-buttons.scss', './registration-submit-button.component.scss']
})
export class RegistrationSubmitButtonComponent implements OnInit {
  @Input() buttonValue: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
