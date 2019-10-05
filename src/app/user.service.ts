import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';
import {parseJsonSchemaToOptions} from '@angular/cli/utilities/json-schema';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = 'localhost:8080/api/v1/manager/';

  constructor(private httpClient: HttpClient) {}

  // public createuser(user: User) {}

  // public updateuser(user: User) {}

  // public deleteuser(id: number) {}

  public getUserById(id: number) {
    const user = this.httpClient.get<User>(`${this.apiURL}/getUserById/${id}`);
    console.log(user);
    return user;
  }

  public getusers() {
    const users = this.httpClient.get<User[]>(`${this.apiURL}/getAllUsers`);
    console.log(users);
    return users;
  }
}
