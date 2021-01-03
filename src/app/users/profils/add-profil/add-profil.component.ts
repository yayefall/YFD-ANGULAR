import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProfilService} from '../../../services/profil.service';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.scss']
})
export class AddProfilComponent implements OnInit {
  formlibelle = this.formbuild.group({
    libelle: ['', [Validators.required]]
  });  constructor( private  prifilservice: ProfilService,
                    private formbuild: FormBuilder) { }
  // @ts-ignore
  ngOnInit(): void {
    // tslint:disable-next-line:label-position no-unused-expression
    // @ts-ignore

  }



  // tslint:disable-next-line:typedef
  onSubmit() {
    // @ts-ignore
    // const body = '{"libelle":"' + this.formlibelle.value.libelle + '"}';
     // @ts-ignore
    this.prifilservice.postProfils(this.formlibelle.value).subscribe(
      data => {
        alert('insere avec succes');
       },
      error => {
        alert('erreur');

      }
    );
  }
}
