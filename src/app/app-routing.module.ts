import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestFormComponent } from './assessment/components/test-form/test-form.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { AboutComponent } from './shared/about/about.component';
import { LandingComponent } from './shared/landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/signup', component: SignupComponent},
  {path: 'user/assessment', component: TestFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
