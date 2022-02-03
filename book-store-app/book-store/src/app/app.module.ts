import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { HomeComponent } from './home/components/home/home.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { BookFormComponent } from './admin/components/book-form/book-form.component';
import { BookListComponent } from './admin/components/book-list/book-list.component';

// * Define the routes for displaying different components
const routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: RegisterComponent},
  {path: 'admin/bookform', component: BookFormComponent},
  {path: 'admin/booklist', component: BookListComponent}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HomeModule, AdminModule, RouterModule.forRoot(routes), SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
