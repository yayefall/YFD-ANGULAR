import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PromoService} from '../../services/promo.service';
import {ReferentielService} from '../../services/referentiel.service';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.scss']
})
export class AddPromotionComponent implements OnInit {
  selectedItems = [];
  dropdownSettings: any = {};
  referentiels: any = [];

  formPromo =  this.formbuilder.group({
    langue: ['', [Validators.required]],
    titre: ['', [Validators.required]],
    description: ['', [Validators.required]],
    lieu: ['', [Validators.required]],
    referenceAgate: ['', [Validators.required]],
    fabrique: ['', [Validators.required]],
    dateDebut: ['', [Validators.required]],
    dateFin: ['', [Validators.required]],
    formateur: [[], [Validators.required]],
    referentiels: [[], [Validators.required]]
  });

  constructor(private formbuilder: FormBuilder,
              private promoService: PromoService,
              private referService: ReferentielService) { }

  ngOnInit(): void {
     this.referService.getReferentiel().subscribe(
       (response: any)  => {
         this.referentiels = response;
         console.log(this.referentiels);
       });

     this.dropdownSettings = {
      primaryKey: 'id',
      singleSelection: false,
      text: 'Select One or More referntiels',
      labelKey: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class'
    };

  }

  onSubmit(): any {
   this.promoService.postPromo(this.formPromo.value).subscribe(
      (data: any) => {
        console.log(data);
        alert('insertion successefull');
      },
      (error: any) => {
        alert('erreur ngay amm fofou nonou');
      });
  }
}
