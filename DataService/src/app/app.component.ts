import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/users.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent implements OnInit {
  title = 'DataService';

  constructor (private userService: UserService) {}

  users: {name: string, status: string}[] = [];

  ngOnInit() {
    this.users = this.userService.Users
  }
  
}
