import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User List';
  headers = ['Transaction', 'Locking', 'Index', 'Memory', 'Redo|Undo'];
  transaction: any;

  constructor(private userService: UserService) {
  }
}
