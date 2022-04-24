import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AppRoutingModule } from './routing.module';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { ProblemComponent } from './components/pages/problem/problem.component';
import { NavigationPanelComponent } from './components/navigation/navigation-panel/navigation-panel.component';
import {SiteNameModule} from "./components/navigation/navigation-panel/navigation-panel.module";
import { FooterPanelComponent } from './components/footer/footer-panel/footer-panel.component';
import {FooterPanelModule} from "./components/footer/footer-panel/footer-panel.module";
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { RegisterFormComponent } from './components/section/forms/register-form/register-form.component';
import { LoginFormComponent } from './components/section/forms/login-form/login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormHeaderComponent } from './components/section/text-content/form-header/form-header.component';
import { FormTextComponent } from './components/section/text-content/form-text/form-text.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginEmailValidationComponent } from './components/section/input-validation/login-email-validation/login-email-validation.component';
import { LoginUsernameValidationComponent } from './components/section/input-validation/login-username-validation/login-username-validation.component';
import { PasswordValidationComponent } from './components/section/input-validation/password-validation/password-validation.component';
import { ValidationErrorMessageComponent } from './components/section/input-validation/validation-error-message/validation-error-message.component';
import { ServerValidationErrorMessageComponent } from './components/section/input-validation/server-validation-error-message/server-validation-error-message.component';
import { LoginSubmitButtonComponent } from './components/section/buttons/login-submit-button/login-submit-button.component';
import { RegistrationSubmitButtonComponent } from './components/section/buttons/registration-submit-button/registration-submit-button.component';
import { AuthTermsWarningComponent } from './components/section/text-content/auth-terms-warning/auth-terms-warning.component';

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
    FormHeaderComponent,
    FormTextComponent,
    LoginEmailValidationComponent,
    LoginUsernameValidationComponent,
    PasswordValidationComponent,
    ValidationErrorMessageComponent,
    ServerValidationErrorMessageComponent,
    LoginSubmitButtonComponent,
    RegistrationSubmitButtonComponent,
    AuthTermsWarningComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteNameModule,
    FooterPanelModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
