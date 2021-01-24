import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProfilsortiService} from '../../services/profilsorti.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-profilsortie',
  templateUrl: './edit-profilsortie.component.html',
  styleUrls: ['./edit-profilsortie.component.scss']
})
export class EditProfilsortieComponent implements OnInit {

  formProfilsorties = this.formbuilder.group({
    libelle: ['', [Validators.required]]
  });

  constructor( private  formbuilder: FormBuilder,
               private  profilsortiService: ProfilsortiService,
               private  route: ActivatedRoute) { }
  public profilsortie: any;
  private id: any ;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id'); // recupere la valeur de l'id
    this.profilsortiService.getProfilsortieById(this.id).subscribe(
      (data: any) => {
        this.profilsortie = data;
        const libelle = document.getElementById('libelle');
        // @ts-ignore
        libelle.value = this.profilsortie.libelle;
      });
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    // @ts-ignore
    this.profilsortiService.putProfilsorties(this.formProfilsorties.value, this.id ).subscribe(
        (data: any) => {
          console.log(data);
          alert('modification avec succes');
      },
      (error: any) => {
        alert('erreur');
        console.log(error);
      });
  }

}
