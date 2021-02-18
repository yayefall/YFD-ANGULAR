import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {GrpcompetenceService} from '../../services/grpcompetence.service';
import {CompetenceService} from '../../services/competence.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-grpcompetence',
  templateUrl: './add-grpcompetence.component.html',
  styleUrls: ['./add-grpcompetence.component.scss']
})
export class AddGrpcompetenceComponent implements OnInit {
  competences: any = [];
  selectedItems = [];
  dropdownSettings: any = {};

  formGrouCompetence = this.formbuilder.group({
    libelle: ['', [Validators.required]],
    descriptif: ['', [Validators.required]],
    competences: [[], [Validators.required]]
  });
  constructor( private  formbuilder: FormBuilder,
               private grpcompetenceService: GrpcompetenceService,
               private competenceService: CompetenceService,
               private router: Router) { }

  ngOnInit(): void {
  this.competenceService.getCompetence().subscribe(
    response => {
      this.competences = response;
      console.log(this.competences);
    });

  this.dropdownSettings = {
      primaryKey: 'id',
      singleSelection: false,
      text: 'Select  Competences',
      labelKey: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class'
    };
  }
  onSubmit(): any {
   this.grpcompetenceService.postGroupeCompetence(this.formGrouCompetence.value).subscribe(
     (data: any) => {
    console.log(data);
    alert('insertion successefull');
    this.router.navigate(['/groupecompetences/list']);
    },
  (error: any ) => {
    alert('erreur dinsertion');
   });
  }
}
