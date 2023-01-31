import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../Services/users.services';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  // providers: [UserService], //commented this out because we want this component to be injected with the same service instance as the parent component, and not a new instance of it. providing it here will create a new instance.
})
export class AddUserComponent implements OnInit{

  name: string = '';
  status: string = '';

  constructor(private userService: UserService, private http: HttpClient) {}

  ngOnInit(): void {}

  AddUser() {
    this.userService.AddUser(this.name, this.status);
    this.http.post('http://127.0.0.1:8000/users/', {name: this.name, status: this.status}).subscribe((res) => {});
  }

}
