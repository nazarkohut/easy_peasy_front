import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-submit-button',
  templateUrl: './login-submit-button.component.html',
  styleUrls: ['../auth-buttons.scss', './login-submit-button.component.scss']
})

export class LoginSubmitButtonComponent implements OnInit {
  @Input() buttonValue: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
