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
import { RegisterFormComponent } from './section/register-form/register-form.component';
import { LoginFormComponent } from './section/login-form/login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SubmitButtonComponent } from './section/submit-button/submit-button.component';
import { FormHeaderComponent } from './section/form-header/form-header.component';
import { FormTextComponent } from './section/form-text/form-text.component';

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
    PrivacyPolicyComponent,
    RegisterFormComponent,
    LoginFormComponent,
    SubmitButtonComponent,
    FormHeaderComponent,
    FormTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteNameModule,
    FooterPanelModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
