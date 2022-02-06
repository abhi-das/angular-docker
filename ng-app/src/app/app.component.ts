import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User, UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  // user: Observable<User>;
  constructor() {}

  ngOnInit(): void {
    // const newUser: User = {
    //   name: 'User 1',
    //   id: 11
    // };
    // this._userSrv.addUser(newUser);
    // this._userSrv.user$.subscribe(usr => {
    //   if(usr.name === 'user1') {
    //     this.deleteUser(usr)
    //   }
    // })
  }

  // deleteUser(user: User): void {
  //   this._userSrv.deleteUser(user)
  // }
}
