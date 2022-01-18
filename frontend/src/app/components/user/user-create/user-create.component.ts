import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router'
import { User } from '../user.module';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    name: '',
    occupation: '',
    initialDate: ''
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }


  createUser(): void {
    if (this.user.initialDate === null) {
      this.userService.showMessage('Data inválida! Por favor selecione o calendário.')
    } else {
      this.userService.create(this.user).subscribe(() => {
        this.userService.showMessage('Usuário cadastrado!')
        this.router.navigate(['/users'])
      })
    }

  }

  cancelar(): void {
    this.router.navigate(['/users'])
  }

}
