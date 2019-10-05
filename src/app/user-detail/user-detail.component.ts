import {Component, Input, OnInit} from '@angular/core';
import { User } from '../user';
import {UserInterface} from '../user.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: UserInterface;

  constructor() { }

  ngOnInit() {
  }

}
