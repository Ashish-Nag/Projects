import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    AboutComponent
  ]
})
export class SharedModule { }
