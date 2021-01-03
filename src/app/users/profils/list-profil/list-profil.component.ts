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
        // console.log(this.profils );
      });
  }
  // tslint:disable-next-line:typedef
  deleteProfilsById(id: any){
    this.profilService.deleteProfils(id).subscribe(
      // alert('voulez vous success'),
      (data: any) => {
        console.log(data);
        alert('supression avec success');
      },
      (error: any) => {
        alert('erreur');

      });
  }
}
