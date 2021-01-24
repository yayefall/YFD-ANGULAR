import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {GrpcompetenceService} from '../../services/grpcompetence.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-grpcompetence',
  templateUrl: './edit-grpcompetence.component.html',
  styleUrls: ['./edit-grpcompetence.component.scss']
})
export class EditGrpcompetenceComponent implements OnInit {
  formGrouCompetence = this.formbuilder.group({
    libelle: ['', [Validators.required]],
    descriptif: ['', [Validators.required]],
    competences: ['', [Validators.required]]
  });
  constructor( private  formbuilder: FormBuilder,
               private grpcompetenceService: GrpcompetenceService,
               private route: ActivatedRoute) { }

  public GroupeCompetence: any;
  private id: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id'); // recupere la valeur de l'id
    this.grpcompetenceService.getGrpCompetenceById(this.id).subscribe(
      (data: any) => {
        this.GroupeCompetence = data;
        const libelle = document.getElementById('libelle');
        const descriptif = document.getElementById('descriptif');
        const competences = document.getElementById('competences');
        // @ts-ignore
        libelle.value = this.GroupeCompetence.libelle;
        // @ts-ignore
        descriptif.value = this.GroupeCompetence.descriptif;
        // @ts-ignore
        competences.value = this.GroupeCompetence.competences;
      });
  }
  onSubmit(): any {
  this.grpcompetenceService.putGroupeCompetence(this.formGrouCompetence.value, this.id).subscribe(
     (data: any) => {
    console.log(data);
    alert('modification avec succes');
    },
    (error: any) => {
    alert('il ya une erreur dee');
    console.log(error);
   });
  }
}
