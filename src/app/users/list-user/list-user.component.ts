import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: any = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }
// tslint:disable-next-line:typedef
  getUser() {
    this.userService.getUsers().subscribe(
      data => {
        // @ts-ignore
        this.users = data;
        console.log(data);
      },
      error => {
      }
    );
  }
}
