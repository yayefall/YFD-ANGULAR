import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ReferentielService} from '../../services/referentiel.service';
import {ActivatedRoute, Router} from '@angular/router';
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
  // @ts-ignore
  fileToUpload: File ;
  public  referentiels: any;
  private id: any;

  constructor( private formbuilder: FormBuilder,
               private referService: ReferentielService,
               private route: ActivatedRoute,
               private gprCompetenceService: GrpcompetenceService,
               private router: Router) { }

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
      });
  }

  handleFileInput(e: any): any {
    this.fileToUpload = e.target.files[0];
  }

  onSubmit(): any {
    const formData = new FormData();
    formData.append('libelle', this.formReferentiels.get('libelle')?.value);
    formData.append('presentation', this.formReferentiels.get('presentation')?.value);
    formData.append('programme', this.fileToUpload);
    formData.append('_method', 'put');
    formData.append('critereAdmission', this.formReferentiels.get('critereAdmission')?.value);
    formData.append('critereEvaluation', this.formReferentiels.get('critereEvaluation')?.value);
    for (const groupe of this.formReferentiels.get('groupeCompetences')?.value) {
      formData.append('groupeCompetence[]', groupe.id);
    }
    this.referService.putReferentiel(formData, this.id).subscribe(
      (data: any) => {
        console.log(data);
        alert('modification avec succes');
        this.router.navigate(['/referentiels/list']);
      },
      (error: any) => {
        alert('Erreur dee ngay am fofou');
        console.log(error);
      });
  }
}
