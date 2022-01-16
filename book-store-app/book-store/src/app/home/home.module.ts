import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { BookModule } from '../book/book.module';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, BookModule, SharedModule, UserModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
