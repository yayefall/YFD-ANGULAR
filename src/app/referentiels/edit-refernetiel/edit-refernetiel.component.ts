import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-refernetiel',
  templateUrl: './edit-refernetiel.component.html',
  styleUrls: ['./edit-refernetiel.component.scss']
})
export class EditRefernetielComponent implements OnInit {

  formReferentiels =  this.formbuilder.group({
    libelle: ['', [Validators.required]],
    presentation: ['', [Validators.required]],
    programme: ['', [Validators.required]],
    critereAdmission: ['', [Validators.required]],
    critereEvaluation: ['', [Validators.required]],
    groupeCompetences: [[], [Validators.required]]
  });

  constructor( private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): any {

  }
}
