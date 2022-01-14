import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private user: UserService, private router: Router) { }

  ngOnInit(): void {
  }


  userCreate(): void {
    this.user.showMessage('Usuário cadastrado!')
  }

  cancelar(): void {
    this.router.navigate(['/users'])
  }

}
