import {Component, OnInit} from '@angular/core';

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

  profileLogoClick() {

  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
