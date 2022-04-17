import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './routing.module';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ProblemComponent } from './pages/problem/problem.component';
import { NavigationPanelComponent } from './navigation/navigation-panel/navigation-panel.component';
import {SiteNameModule} from "./navigation/navigation-panel/navigation-panel.module";
import { FooterPanelComponent } from './footer/footer-panel/footer-panel.component';
import {FooterPanelModule} from "./footer/footer-panel/footer-panel.module";
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProblemComponent,
    NavigationPanelComponent,
    FooterPanelComponent,
    AboutComponent,
    HomeComponent,
    TermsComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteNameModule,
    FooterPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
