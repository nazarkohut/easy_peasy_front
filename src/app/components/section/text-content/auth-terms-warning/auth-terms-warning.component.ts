import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth-terms-warning',
  templateUrl: './auth-terms-warning.component.html',
  styleUrls: ['./auth-terms-warning.component.scss']
})
export class AuthTermsWarningComponent implements OnInit {
  @Input() termsLink: string = '';
  @Input() policyLink: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
