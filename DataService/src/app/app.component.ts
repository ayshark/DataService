import { Component, OnInit } from '@angular/core';
import { LogService } from './Services/log.services';
import { UserService } from './Services/users.services';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Users } from './Model/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, LogService, HttpClient],
})
export class AppComponent implements OnInit {
  title = 'DataService';

  constructor (private userService: UserService, private logService: LogService, private http: HttpClient) {}

  users: {name: string, status: string}[] = [];

  ngOnInit() {
    // this.users = this.userService.Users;
    // this.users.push(this.GetUsers());
    this.GetUsers();
  }

  ViewDetails(user: {name: string, status: string}) {
    this.userService.ViewUser(user);
  }

  CreateUser(user: {name: string, status: string}) {
    // this.http.post('https://userstatus-1-default-rtdb.firebaseio.com/users.json', user).subscribe((res) => console.log(res));
  }

  private GetUsers() {
    this.http.get('http://127.0.0.1:8000/users/')
    .pipe(map((res: {[key: string]: Users}) => {
      const users = [];
      for(const key in res) {
        if(res.hasOwnProperty(key)){
          users.push({...res[key], id: key})
        }
      }
      console.log(users);
      return users;
    }))
    .subscribe((data) => {
      this.users = data;
    });
  }
  
}
