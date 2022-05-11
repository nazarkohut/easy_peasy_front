import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent implements OnInit {
  @Input() navData: { text: string, link: string } = {text: '', link: ''};

  btnClick = () => {
    this.router.navigateByUrl(this.navData.link);
  }

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

}
