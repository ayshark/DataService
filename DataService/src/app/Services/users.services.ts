import { Injectable } from "@angular/core";
import { LogService } from "./log.services";

@Injectable( //used for the receiving service

)
export class UserService {
    constructor(private logService: LogService){}

    Users = [
        {name: 'Aysha', status: 'active'},
        {name: 'Mike', status: 'inactive'},
        {name: 'Abeer', status: 'active'},
        {name: 'Alex', status: 'active'},
        {name: 'Zach', status: 'inactive'},
    ]

    AddUser(name: string, status: string) {
        this.Users.push({name: name, status: status});
        this.logService.LogMessage(name, status)
    }
}