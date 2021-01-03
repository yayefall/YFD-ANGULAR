import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfilService} from '../../../services/profil.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss']
})
export class EditProfilComponent implements OnInit {
  formlibelle = this.formbuilder.group({
    libelle: ['', [Validators.required]]
  });
  constructor( private prifilservice: ProfilService,
               private formbuilder: FormBuilder,
               private  route: ActivatedRoute) { }
  public profil: any;
  private id: any ;
  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id');
  this.prifilservice.getProfilsById(this.id).subscribe(
  (data) => {
      this.profil = data;
      const libelle = document.getElementById('libelle');
      // @ts-ignore
      libelle.value = this.profil.libelle;
  });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    // @ts-ignore
    // @ts-ignore
    this.prifilservice.putProfils(this.formlibelle.value, this.id ).subscribe(
        (data: any) => {
        console.log(data);
        alert('modification avec succes');
      },
      (error: any) => {
        alert('erreur');

      });
   }

  }

