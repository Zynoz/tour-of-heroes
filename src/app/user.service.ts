import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { UserInterface} from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = 'http://localhost:8080/api/v1/manager/';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<UserInterface[]> {
    return this.httpClient.get<UserInterface[]>(`${this.apiURL}/getAllUsers`);
  }

  getUser(id: string): Observable<UserInterface> {
    return this.httpClient.get<UserInterface>(`${this.apiURL}/getUserById/{id}`);
  }

  createUser(name: string): Observable<UserInterface> {
    return this.httpClient.post<UserInterface>(`${this.apiURL}/createUser/`, name, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  deleteUser(id: string): Observable<UserInterface> {
    return this.httpClient.delete<UserInterface>(`${this.apiURL}/deleteUser/${id}`);
  }
}
