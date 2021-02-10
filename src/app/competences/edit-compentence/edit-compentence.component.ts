import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GrpcompetenceService} from '../../services/grpcompetence.service';
import {CompetenceService} from '../../services/competence.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-compentenc',
  templateUrl: './edit-compentence.component.html',
  styleUrls: ['./edit-compentence.component.scss']
})
export class EditCompentenceComponent implements OnInit {
  groupeCompetences: any = [];
  selectedItems = [];
  dropdownSettings: any = {};
  // @ts-ignore
  niveaux: FormArray;

  formCompetence = this.formbuilder.group({
    libelle: ['', [Validators.required]],
    descriptif: ['', [Validators.required]],
    niveaux: this.formbuilder.array([this.createNiveau()])
  });

  constructor(private grcompetenceService: GrpcompetenceService,
              private competenceService: CompetenceService,
              private formbuilder: FormBuilder,
              private route: ActivatedRoute) {}

  public Competence: any;
  private id: any;

  ngOnInit(): void {
    this.addNiveau();
    /*this.grcompetenceService.getGroupCompetence().subscribe(
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
    };*/

    // @ts-ignore
    this.id = +this.route.snapshot.paramMap.get('id'); // recupere la valeur de l'id
    this.competenceService.getCompetenceById(this.id).subscribe(
      (data: any) => {
        this.Competence = data;
        this.formCompetence.patchValue(data);

    /*  const libelle = document.getElementById('libelle');
      const descriptif = document.getElementById('descriptif');
      const groupecompetences = document.getElementById('groupecompetences[]');
      const niveaux = document.getElementById('niveaux[]');
        // @ts-ignore
      libelle.value = this.Competence.libelle;
        // @ts-ignore
      descriptif.value = this.Competence.descriptif;
        // @ts-ignore
      groupecompetences.value = this.Competence.groupecompetences;
        // @ts-ignore
      niveaux.value = this.Competence.niveaux;*/
    });
  }

  createNiveau(): FormGroup {
    return this.formbuilder.group({
      libelle: ['', [Validators.required]],
      groupeDaction: ['', [Validators.required]],
      critereEvaluation: ['', [Validators.required]],
    });

  }

  getNiveauxFormGroups(): any {
    return (this.formCompetence.get('niveaux') as FormArray);
  }
  onSubmit(): any{
    console.log(this.id);
    this.competenceService.putCompetence(this.formCompetence.value, this.id).subscribe(
      (data: any) => {
        console.log(data);
        alert('modification avec succes');
      },
      (error: any) => {
        alert('l erreur ngay amm fofou deee');
        console.log(error);
      });
  }
  addNiveau(): any {
    for (let i = 0; i < 2; i++){
      ( this.formCompetence.get('niveaux') as FormArray).push(this.createNiveau());
    }
  }


}
