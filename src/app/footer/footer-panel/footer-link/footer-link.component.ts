import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-link',
  templateUrl: './footer-link.component.html',
  styleUrls: ['./footer-link.component.scss']
})
export class FooterLinkComponent implements OnInit {
  @Input() footerNavData: {text: string, link: string}={text: '', link: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
