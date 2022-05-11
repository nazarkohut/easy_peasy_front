import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {SiteNameComponent} from './site-name/site-name.component';
import {NavigationButtonComponent} from './navigation-button/navigation-button.component';
import {NavigationAuthButtonComponent} from './navigation-auth-button/navigation-auth-button.component';
import {
  NavigationProfileLogoMenuComponent
} from './navigation-profile-logo-menu/navigation-profile-logo-menu.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {NavigationProfileLogoMenuModule} from "./navigation-profile-logo-menu/navigation-profile-logo-menu.module";

@NgModule({
  declarations: [
    SiteNameComponent,
    NavigationButtonComponent,
    NavigationAuthButtonComponent,
    NavigationProfileLogoMenuComponent,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    NavigationProfileLogoMenuModule,
  ],
  providers: [],
  exports: [
    SiteNameComponent,
    NavigationButtonComponent,
    NavigationAuthButtonComponent,
    NavigationProfileLogoMenuComponent,
  ],
})
export class SiteNameModule {
}
