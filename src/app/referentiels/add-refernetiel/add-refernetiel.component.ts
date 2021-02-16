import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ReferentielService} from '../../services/referentiel.service';
import {GrpcompetenceService} from '../../services/grpcompetence.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-refernetiel',
  templateUrl: './add-refernetiel.component.html',
  styleUrls: ['./add-refernetiel.component.scss']
})
export class AddRefernetielComponent implements OnInit {

  groupecompetences: any = [];
  selectedItems = [];
  dropdownSettings: any = {};
  // @ts-ignore
  fileToUpload: File ;

  formReferentiels =  this.formbuilder.group({
    libelle: ['', [Validators.required]],
    presentation: ['', [Validators.required]],
    programme: ['', [Validators.required]],
    critereAdmission: ['', [Validators.required]],
    critereEvaluation: ['', [Validators.required]],
    groupeCompetences: [[], [Validators.required]]
  });

  handleFileInput(e: any): any {
    this.fileToUpload = e.target.files[0];
  }
  constructor( private formbuilder: FormBuilder,
               private  referentielService: ReferentielService,
               private grpcompService: GrpcompetenceService,
               private route: Router) { }

  ngOnInit(): void {
    this.grpcompService.getGroupCompetence().subscribe(
      reponse => {
        this.groupecompetences = reponse;
        console.log(this.groupecompetences);
      });

    this.dropdownSettings = {
      primaryKey: 'id',
      singleSelection: false,
      text: 'Select Groupe Competences',
      labelKey: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class'
    };
  }
  onSubmit(): any {
    const formData = new FormData();
    formData.append('libelle', this.formReferentiels.get('libelle')?.value);
    formData.append('presentation', this.formReferentiels.get('presentation')?.value);
    formData.append('programme', this.fileToUpload);
    formData.append('critereAdmission', this.formReferentiels.get('critereAdmission')?.value);
    formData.append('critereEvaluation', this.formReferentiels.get('critereEvaluation')?.value);
    for (const groupe of this.formReferentiels.get('groupeCompetences')?.value) {
      formData.append('groupeCompetence[]', groupe.id);
    }
   // formData.append('groupeCompetence[]', this.formReferentiels.get('groupeCompetence')?.value);
    console.log(this.formReferentiels);
    return this.referentielService.postReferentiel(formData).subscribe(
      (data: any) => {
        console.log(data);
        alert('insertion successfull');
        this.route.navigate(['/referentiels/list']);
      },
        (error: any) => {
        alert('il ya une erreur deeeeeeeeeeeeeee');
        console.log(error);
      }
    );
  }
}
