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

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'problem', component: ProblemsComponent, canActivate: [AuthGuard]},
  {path: 'problem/:id', component: ProblemComponent, canActivate: [AuthGuard]},
  {path: 'tags/:tag', component: ProblemComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'terms', component: TermsComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'confirm-account', component: RegistrationSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
