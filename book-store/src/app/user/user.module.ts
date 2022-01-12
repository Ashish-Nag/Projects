import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { TableBodyComponent } from './components/table-body/table-body.component';



@NgModule({
  declarations: [
    UserListComponent,
    TableBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UserModule { }
