import { Component, Input, OnInit } from '@angular/core';
import { UserListModel } from '../../models/user.model';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent implements OnInit {

  @Input() userList: UserListModel;
  constructor() { }

  ngOnInit(): void {
  }

}
