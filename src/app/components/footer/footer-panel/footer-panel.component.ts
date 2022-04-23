import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-panel',
  templateUrl: './footer-panel.component.html',
  styleUrls: ['./footer-panel.component.scss']
})
export class FooterPanelComponent implements OnInit {
  obj = Object;

  footerNavButtons: Array<{text: string, link: string}> = [{text:"About", link:"about"}, {text:"Terms", link:"terms"},
    {text:"Privacy Policy", link:"privacy-policy"}];
  constructor() { }

  ngOnInit(): void {
  }

}
