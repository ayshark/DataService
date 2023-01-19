import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/users.services';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit{
  constructor(private userService: UserService) {}

  user: {name: string, status: string} = {name:'', status:''};
 

  ngOnInit() {
    this.userService.OnViewClicked.subscribe((data: {name: string, status: string}) => this.user = data);
    console.log(this.user)
  }

}
