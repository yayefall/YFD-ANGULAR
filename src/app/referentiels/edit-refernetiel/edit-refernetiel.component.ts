import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ReferentielService} from '../../services/referentiel.service';
import {ActivatedRoute} from '@angular/router';
import {GrpcompetenceService} from '../../services/grpcompetence.service';

@Component({
  selector: 'app-edit-refernetiel',
  templateUrl: './edit-refernetiel.component.html',
  styleUrls: ['./edit-refernetiel.component.scss']
})
export class EditRefernetielComponent implements OnInit {

  groupecompetences: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};

  formReferentiels =  this.formbuilder.group({
    libelle: ['', [Validators.required]],
    presentation: ['', [Validators.required]],
    programme: ['', [Validators.required]],
    critereAdmission: ['', [Validators.required]],
    critereEvaluation: ['', [Validators.required]],
    groupeCompetences: [[], [Validators.required]]
  });

  public  referentiels: any;
  private id: any;

  constructor( private formbuilder: FormBuilder,
               private referService: ReferentielService,
               private route: ActivatedRoute,
               private gprCompetenceService: GrpcompetenceService) { }

  ngOnInit(): void {

    this.gprCompetenceService.getGroupCompetence().subscribe(
      reponse => {
        this.groupecompetences = reponse;
        console.log(this.groupecompetences);
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

    this.id = this.route.snapshot.paramMap.get('id'); // recupere la valeur de l'id
    this.referService.getReferentielById(this.id).subscribe(
      (data: any) => {
       this.formReferentiels.patchValue(data);
      }
    );
  }

  onSubmit(): any {
    this.referService.putReferentiel(this.formReferentiels.value, this.id).subscribe(
      (data: any) => {
        console.log(data);
        alert('modification avec succes');
      },
      (error: any) => {
        alert('Erreur dee ngay am fofou');
        console.log(error);
      });
  }
}
