import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProfilService} from '../../../services/profil.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.scss']
})
export class AddProfilComponent implements OnInit {
  formlibelle = this.formbuild.group({
    libelle: ['', [Validators.required]]
  });  constructor( private  prifilservice: ProfilService,
                    private formbuild: FormBuilder,
                    private route: Router) { }
  // @ts-ignore
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.prifilservice.postProfils(this.formlibelle.value).subscribe(
      data => {
        alert('inserer avec succes');
        this.route.navigate(['/profils/list']);
       },
      error => {
        alert('erreur');

      }
    );
  }
}
