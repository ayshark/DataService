import { Component, OnInit } from '@angular/core';
import { LogService } from './Services/log.services';
import { UserService } from './Services/users.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, LogService],
})
export class AppComponent implements OnInit {
  title = 'DataService';

  constructor (private userService: UserService, private logService: LogService) {}

  users: {name: string, status: string}[] = [];

  ngOnInit() {
    this.users = this.userService.Users
  }

  ViewDetails(user: {name: string, status: string}) {
    this.userService.ViewUser(user);
  }
  
}
