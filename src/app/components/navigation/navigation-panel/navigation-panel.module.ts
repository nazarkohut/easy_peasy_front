import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {SiteNameComponent} from './site-name/site-name.component';
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';
import { NavigationAuthButtonComponent } from './navigation-auth-button/navigation-auth-button.component';

@NgModule({
  declarations: [
    SiteNameComponent,
    NavigationButtonComponent,
    NavigationAuthButtonComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    SiteNameComponent,
    NavigationButtonComponent,
    NavigationAuthButtonComponent,
  ],
})
export class SiteNameModule {
}
