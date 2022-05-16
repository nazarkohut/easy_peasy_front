import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activate-account-form',
  templateUrl: './activate-account-form.component.html',
  styleUrls: ['../auth-form.scss', './activate-account-form.component.scss']
})
export class ActivateAccountFormComponent implements OnInit {
  redirectButton: Array<{ text: string, link: string }> = [{text: 'Back to login', link: 'login'}];

  constructor() { }

  ngOnInit(): void {
  }

}
