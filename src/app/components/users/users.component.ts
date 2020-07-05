import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { ProviderAst } from '@angular/compiler';
import { global } from '../../services/global';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService],
})
export class UsersComponent implements OnInit {
  public users: User[];
  public url;
  public page_title: string;

  constructor(private _userService: UserService) {
    this.url = global.url;
    this.page_title = 'Compañeros';
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe(
      (response) => {
        if (response.users) {
          this.users = response.users;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
