import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ProfileMenuHeaderComponent} from './profile-menu-header/profile-menu-header.component';
import {ProfileMenuButtonsComponent} from './profile-menu-buttons/profile-menu-buttons.component';
import {MatMenuModule} from "@angular/material/menu";
import {
  ProfileMenuFooterDecorationComponent
} from './profile-menu-footer-decoration/profile-menu-footer-decoration.component';
import {AuthGuard} from "../../../../services/guards/auth.guard";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "../../../../services/jwt/inceptor/jwt-interceptor.service";

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
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  exports: [
    ProfileMenuHeaderComponent,
    ProfileMenuButtonsComponent,
    ProfileMenuFooterDecorationComponent,
  ],
})
export class NavigationProfileLogoMenuModule {
}
