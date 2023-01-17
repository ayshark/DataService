export class UserService {
    Users = [
        {name: 'Aysha', status: 'active'},
        {name: 'Mike', status: 'inactive'},
        {name: 'Abeer', status: 'active'},
        {name: 'Alex', status: 'active'},
        {name: 'Zach', status: 'inactive'},
    ]

    AddUser(name: string, status: string) {
        this.Users.push({name: name, status: status})
    }
}