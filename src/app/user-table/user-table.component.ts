import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  users:any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(resp => this.users = resp)
  }
  addNewUser() {
    let user = {
      "name": "Ashish Yadhuvanshi",
      "email": "ashishkvs@gmail.com",
      "pass": "ash@5445",
      "id": "10"+Math.random()
    }
    this.userService.saveUser(user).subscribe(resp => console.log(resp));
      
  }

}
