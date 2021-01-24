import { Component, OnInit } from '@angular/core';
import {ProfilsortiService} from '../../services/profilsorti.service';

@Component({
  selector: 'app-list-profilsortie',
  templateUrl: './list-profilsortie.component.html',
  styleUrls: ['./list-profilsortie.component.scss']
})
export class ListProfilsortieComponent implements OnInit {
  profilsorties: any = [];

  constructor(private profilsortieService: ProfilsortiService) { }

  ngOnInit(): void {
    this.getProfilsorties();
  }

// tslint:disable-next-line:typedef
getProfilsorties(){
    this.profilsortieService.getProfilsortie().subscribe(
      (data) => {
        this.profilsorties = data;
       // console.log(this.profilsorties );
      },
    (error: any) => {
        alert('Il ya erreur de recuperation');
    });
  }
  // tslint:disable-next-line:typedef
  deleteProfilsotiById(id: any){
    if (confirm('Etes vous sure de vouloir supprimer')){
    this.profilsortieService.deleteProfilsorties(id).subscribe(
      (data: any) => {
        console.log(data);
        alert('suppression avec success');
      },
      (error: any) => {
        alert('error');
      });
    }
  }
}
