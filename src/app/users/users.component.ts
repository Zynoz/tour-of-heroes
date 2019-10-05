import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';
import { UserService} from '../user.service';
import {UserInterface} from '../user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: UserInterface[];
  selectedUser: UserInterface;
  user: UserInterface;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
        this.userService.getUsers()
      .subscribe(
        (data: UserInterface[]) =>  { // start of (1)
          this.users = data;
        }, // end of (1)
        (error: any)   => console.log(error), // (2) second argument
        ()             => console.log('all data gets') // (3) second argument
      );
  }

  getUser(id: string) {
    this.userService.getUser(id)
      .subscribe(
        (data: UserInterface) => {
          this.user = data;
        },
        (error: any) => console.log(error),
        () => console.log('user received')
      );
  }

  createUser(name: string) {
    this.userService.createUser(name)
      .subscribe(
        (data: UserInterface) => {
          this.user = data;
        },
        (error: any) => console.log(error),
        () => console.log('created user')
      );
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id)
      .subscribe(
        (res: any) => this.getAllUsers(), // (1)
        (error: any) => console.log(error), // (2)
        () => console.log('deleted') // (3)
      );
  }

  onSelect(user: UserInterface) {
    this.selectedUser = user;
    console.log(user);
  }
}
