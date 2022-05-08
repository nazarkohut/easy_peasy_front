import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { ProfileMenuHeaderComponent } from './profile-menu-header/profile-menu-header.component';
import { ProfileMenuButtonsComponent } from './profile-menu-buttons/profile-menu-buttons.component';
import {MatMenuModule} from "@angular/material/menu";
import { ProfileMenuFooterDecorationComponent } from './profile-menu-footer-decoration/profile-menu-footer-decoration.component';

@NgModule({
  declarations: [
    ProfileMenuHeaderComponent,
    ProfileMenuButtonsComponent,
    ProfileMenuFooterDecorationComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
  ],
  providers: [],
  exports: [
    ProfileMenuHeaderComponent,
    ProfileMenuButtonsComponent,
    ProfileMenuFooterDecorationComponent,
  ],
})
export class NavigationProfileLogoMenuModule {
}
