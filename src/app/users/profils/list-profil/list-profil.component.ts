import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../../../services/profil.service';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.scss']
})
export class ListProfilComponent implements OnInit {
  profils = [];
  constructor( private profilService: ProfilService) { }

  ngOnInit(): void {
    this.getProfil();
  }
  // tslint:disable-next-line:typedef
  getProfil(){
    this.profilService.getProfils().subscribe(
      data => {
        // @ts-ignore
        this.profils = data;
        console.log(data);
      }
    );
  }
}
