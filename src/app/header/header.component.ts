import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConnexionService} from '../services/connexion.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  maConnexion: true;
 public users: any;
  constructor(private route: Router, private connexion: ConnexionService,
              private  userServve: UserService) { }

  ngOnInit(): void {
   /* const id = localStorage.getItem('id');
    this.userServve.getUsersById(Number(id)).subscribe(
      (data: any) => {
        this.users = data;
      }
    );*/
  }

  // tslint:disable-next-line:typedef
  logOout() {
    // localStorage.removeItem('token');
    // this.route.navigate(['/login']);
    this.connexion.logout();
  }
}
