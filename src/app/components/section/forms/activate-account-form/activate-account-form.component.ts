import {Component, Input, OnInit} from '@angular/core';
import {RedirectButton} from "../../../../../assets/type-script/UI-interfaces/redirect-button";

@Component({
  selector: 'app-activate-account-form',
  templateUrl: './activate-account-form.component.html',
  styleUrls: ['../auth-form.scss', './activate-account-form.component.scss']
})
export class ActivateAccountFormComponent implements OnInit {
  redirectButton: Array<RedirectButton> = [{text: 'Back to login', link: 'login'}];

  constructor() { }

  ngOnInit(): void {
  }

}
