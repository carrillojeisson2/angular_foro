import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService],
})
export class RegisterComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;

  constructor(private _userService: UserService) {
    this.page_title = 'Registrate';
    this.user = new User('', '', '', '', '', '', 'ROLE_USER');
  }

  ngOnInit(): void {
    console.log(this._userService.prueba());
  }

  onSubmit(form) {
    this._userService.register(this.user).subscribe(
      (Response) => {
        if (Response.user && Response.user._id) {
          this.status = 'success';
          form.reset();
        } else {
          this.status = 'eerror';
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
