import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FooterLinkComponent } from './footer-link/footer-link.component';


@NgModule({
  declarations: [
    FooterLinkComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
    exports: [
        FooterLinkComponent
    ],
})
export class FooterPanelModule {
}
