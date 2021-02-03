import { Component, OnInit } from '@angular/core';
import {GrpcompetenceService} from '../../services/grpcompetence.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompetenceService} from '../../services/competence.service';

@Component({
  selector: 'app-add-compentenc',
  templateUrl: './add-compentence.component.html',
  styleUrls: ['./add-compentence.component.scss']
})
export class AddCompentenceComponent implements OnInit {
  groupeCompetences: any = [];
  selectedItems = [];
  dropdownSettings: any = {};
  // @ts-ignore
  niveaux: FormArray;

  formCompetence = this.formbuilder.group({
    libelle: ['', [Validators.required]],
    descriptif: ['', [Validators.required]],
    groupecompetences: [[], [Validators.required]],
    niveaux: this.formbuilder.array([this.createNiveau()])
  });

  constructor(private grcompetenceService: GrpcompetenceService,
              private competenceService: CompetenceService,
              private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.grcompetenceService.getGroupCompetence().subscribe(
      (response: any) => {
        this.groupeCompetences = response;
        console.log(this.groupeCompetences);

      });
    this.dropdownSettings = {
      primaryKey: 'id',
      singleSelection: false,
      text: 'Select One or More Groupe Competences',
      labelKey: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class'
    };
    this.addNiveau();
  }

  onSubmit(): any {
    this.competenceService.postCompetence(this.formCompetence.value).subscribe(
      (data: any) => {
        console.log(data);
        alert('insertion successefull');
      },
      (error: any) => {
        alert('erreur dinsertion');
      });
  }


  createNiveau(): FormGroup {
    return this.formbuilder.group({
      libelle: ['', [Validators.required]],
      groupeDaction: ['', [Validators.required]],
      critereEvaluation: ['', [Validators.required]],
    });
  }

  // tslint:disable-next-line:typedef
  getNiveauxFormGroups() {
    return (this.formCompetence.get('niveaux') as FormArray);
  }

  addNiveau(): any {
    for (let i = 0; i < 2; i++){
      ( this.formCompetence.get('niveaux') as FormArray).push(this.createNiveau());
    }
    /* this.niveaux = this.formCompetence.get('niveaux') as FormArray;
    this.niveaux.push(this.createNiveau());*/
  }


}
