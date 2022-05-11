import {Component, OnInit} from '@angular/core';
import {CookieService} from "../../../services/jwt/cookie/cookie.service";

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent implements OnInit {

  navButtons: Array<{ text: string, link: string }> = [{text: "Learning", link: ""}, {
    text: "Problems",
    link: "problem"
  },
    {text: "Tests", link: "test"}];

  navAuthButtons: Array<{ text: string, link: string }> = [{text: "Login", link: "login"}, {
    text: "Register",
    link: "registration"
  }];

  constructor(public cookie: CookieService) {
  }

  ngOnInit(): void {
  }

}
