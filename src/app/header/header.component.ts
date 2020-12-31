import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConnexionService} from '../services/connexion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  maConnexion: true;

  constructor(private route: Router,private connexion: ConnexionService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logOout() {
    // localStorage.removeItem('token');
    // this.route.navigate(['/login']);
    this.connexion.logout();
  }
}
