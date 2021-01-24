import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../../../services/profil.service';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.scss']
})
export class ListProfilComponent implements OnInit {
  profils: any = [];
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
      },
      error => {
        alert('il ya erreur de recuperation des données');
      });
  }
  // tslint:disable-next-line:typedef
  deleteProfilsById(id: any) {
    if (confirm('Etes vous sure de vouloir supprimer')) {
      this.profilService.deleteProfils(id).subscribe(
        (data: any) => {
          console.log(data);
          alert('supression avec success');
        },
        (error: any) => {
          alert('erreur');

        });
    }
  }
}
