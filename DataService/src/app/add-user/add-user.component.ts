import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/users.services';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  // providers: [UserService], //commented this out because we want the same service instance as the parent component, and not a new instance of it. 
})
export class AddUserComponent implements OnInit{

  name: string = '';
  status: string = 'inactive';

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  AddUser() {
    this.userService.AddUser(this.name, this.status);
    console.log(this.userService.Users);
  }

}
