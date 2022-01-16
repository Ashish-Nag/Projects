import { Component, Input, OnInit } from '@angular/core';
import { UserListModel } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }
  usersList : UserListModel[];
  ngOnInit(): void {
    this.usersList = [];

    let user1 = new UserListModel();

    user1.s_numb = 1;
    user1.firstName = "Ashish";
    user1.lastName = "Kumar";
    user1.userId = "@ash";
    user1.dateCreated = "Jun 2, 21";
    user1.totalPurchases = 10;

    this.usersList.push(user1);

    let user2 = new UserListModel();

    user2.s_numb = 2;
    user2.firstName = "Swati";
    user2.lastName = "Rani";
    user2.userId = "@rani";
    user2.dateCreated = "Jan 2, 22";
    user2.totalPurchases = 50;

    this.usersList.push(user2);

  }

}
