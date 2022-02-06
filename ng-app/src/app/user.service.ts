import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  name: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  INIT_USER: User = {
    name: 'User 1',
    id: 1
  };
  private _user: BehaviorSubject<User> = new BehaviorSubject(this.INIT_USER);
  public user$: Observable<User> = this._user.asObservable();

  constructor() { }

  addUser(user: User) {
    this._user.next(user);
  }

  deleteUser(user: User) {
    console.log('delete user in this method!')
  }
}
