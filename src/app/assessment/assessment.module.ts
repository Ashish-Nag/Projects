import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestFormComponent } from './components/test-form/test-form.component';



@NgModule({
  declarations: [
    TestFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestFormComponent
  ]
})
export class AssessmentModule { }
