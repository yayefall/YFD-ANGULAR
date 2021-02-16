import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfilService} from '../../../services/profil.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss']
})
export class EditProfilComponent implements OnInit {
  formlibelle = this.formbuilder.group({
    libelle: ['', [Validators.required]]
  });
  constructor( private profilservice: ProfilService,
               private formbuilder: FormBuilder,
               private route: ActivatedRoute,
               private router: Router) { }
  public profil: any;
  private id: any ;
  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id'); // il permet recuperer la valeur de l'id
  this.profilservice.getProfilsById(this.id).subscribe(
  (data) => {
    this.formlibelle.patchValue(data);
    /*  this.profil = data;
      const libelle = document.getElementById('libelle');
      // @ts-ignore
      libelle.value = this.profil.libelle;*/
  });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.profilservice.putProfils(this.formlibelle.value, this.id ).subscribe(
        (data: any) => {
        console.log(data);
        alert('modification avec succes');
        this.router.navigate(['/profils/list']);
      },
      (error: any) => {
        alert('erreur');

      });
   }

  }

