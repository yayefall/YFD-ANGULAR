import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {GrpcompetenceService} from '../../services/grpcompetence.service';
import {CompetenceService} from '../../services/competence.service';

@Component({
  selector: 'app-add-grpcompetence',
  templateUrl: './add-grpcompetence.component.html',
  styleUrls: ['./add-grpcompetence.component.scss']
})
export class AddGrpcompetenceComponent implements OnInit {

  formGrouCompetence = this.formbuilder.group({
    libelle: ['', [Validators.required]],
    descriptif: ['', [Validators.required]],
    competences: [[], [Validators.required]]
  });
  constructor( private  formbuilder: FormBuilder,
               private grpcompetenceService: GrpcompetenceService,
               private competenceService: CompetenceService) { }

 competences: any;

  ngOnInit(): void {
  this.competenceService.getCompetence().subscribe(
    reponse => {
      this.competences = reponse;
      console.log(this.competences);
    });
  }
  onSubmit(): any {
   this.grpcompetenceService.postGroupeCompetence(this.formGrouCompetence.value).subscribe(
     (data: any) => {
    console.log(data);
    alert('insertion successefull');
    },
  (error: any ) => {
    alert('erreur dinsertion');
   });
  }
}
