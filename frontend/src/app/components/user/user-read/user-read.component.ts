import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { User } from '../user.module';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users: User[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.read().subscribe(users => {
      this.users = users
      console.log(users)
    })
  }

}
