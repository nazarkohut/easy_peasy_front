import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/pages/login/login.component";
import {RegistrationComponent} from './components/pages/registration/registration.component';
import {ProblemsComponent} from './components/pages/problems/problems.component';
import {HomeComponent} from "./components/pages/home/home.component";
import {TermsComponent} from "./components/pages/terms/terms.component";
import {AboutComponent} from "./components/pages/about/about.component";
import {PrivacyPolicyComponent} from "./components/pages/privacy-policy/privacy-policy.component";
import {RegistrationSuccessComponent} from "./components/pages/registration-success/registration-success.component";
import {AuthGuard} from "./services/guards/auth.guard";
import {ProblemComponent} from "./components/pages/problem/problem.component";
import {ActivateAccountComponent} from "./components/pages/activate-account/activate-account.component";
import {PageNotFoundComponent} from "./components/pages/page-not-found/page-not-found.component";
import {LearningComponent} from "./components/pages/learning/learning.component";
import {TestsComponent} from "./components/pages/tests/tests.component";
import {
  ResendAccountActivationEmailComponent
} from "./components/pages/resend-account-activation-email/resend-account-activation-email.component";
import {ResetPasswordComponent} from "./components/pages/reset-password/reset-password.component";
import {
  ResetPasswordConfirmComponent
} from "./components/pages/reset-password-confirm/reset-password-confirm.component";
import {
  EmailSentSuccessComponent
} from "./components/pages/email-sent-success/email-sent-success.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'activate/:uid/:token', component: ActivateAccountComponent},
  {path: 'problem', component: ProblemsComponent, canActivate: [AuthGuard]},
  {path: 'problem/:id', component: ProblemComponent, canActivate: [AuthGuard]},
  {path: 'tags/:tag', component: ProblemComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'terms', component: TermsComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'confirm-account', component: RegistrationSuccessComponent},
  {path: 'learning', component: LearningComponent, canActivate: [AuthGuard]},
  {path: 'tests', component: TestsComponent, canActivate: [AuthGuard]},
  {path: 'resend/email', component: ResendAccountActivationEmailComponent},
  {path: 'forgot-password', component: ResetPasswordComponent},
  {path: 'email/reset/confirm/:uid/:token', component: ResetPasswordConfirmComponent},
  {path: 'email-send/success', component: EmailSentSuccessComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
