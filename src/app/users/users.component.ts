import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users = USERS;
  selectedUser: User;

  constructor() { }

  ngOnInit() {
  }

  onSelect(user: User) {
    this.selectedUser = user;
    console.log(user);
  }
}
