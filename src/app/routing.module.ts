import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import { RegistrationComponent } from './pages/registration/registration.component';
import { ProblemComponent } from './pages/problem/problem.component';
import {HomeComponent} from "./pages/home/home.component";
import {TermsComponent} from "./pages/terms/terms.component";
import {AboutComponent} from "./pages/about/about.component";
import {PrivacyPolicyComponent} from "./pages/privacy-policy/privacy-policy.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  { path: 'registration', component:  RegistrationComponent},
  { path: 'problem', component: ProblemComponent},
  { path: 'home', component: HomeComponent},
  { path: 'terms', component: TermsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
