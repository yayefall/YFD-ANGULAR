import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: any = [];
  p = 1;
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
        alert('il ya erreur de recupereration des données users');
      }
    );
  }
  // tslint:disable-next-line:typedef
  deleteUserById(id: any){
    if (confirm('Etes vous sure de vouloir supprimer')) {
      this.userService.deleteUsers(id).subscribe(
        (data: any) => {
          console.log(data);
          alert('supression avec success');
        },
        (error: any) => {
          alert('erreur de recuperation');

        });
    }
  }
}
