import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-auth-button',
  templateUrl: './navigation-auth-button.component.html',
  styleUrls: ['./navigation-auth-button.component.scss']
})
export class NavigationAuthButtonComponent implements OnInit {
  @Input() navData: { text: string, link: string } = {text: '', link: ''};

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

}
