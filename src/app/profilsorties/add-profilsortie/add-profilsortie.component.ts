import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProfilsortiService} from '../../services/profilsorti.service';

@Component({
  selector: 'app-add-profilsortie',
  templateUrl: './add-profilsortie.component.html',
  styleUrls: ['./add-profilsortie.component.scss']
})
export class AddProfilsortieComponent implements OnInit {
formProfilsortie = this.formbuilder.group({
  libelle: ['', [Validators.required]]
});
  constructor( private formbuilder: FormBuilder,
               private profisortiService: ProfilsortiService) { }

  ngOnInit(): void {
  }

onSubmit(): any{
    this.profisortiService.postProfilsorties(this.formProfilsortie.value).subscribe(
      (data: any) => {
        console.log(data);
        alert('insertion successefull');
      },
      (error: any) => {
        alert('erreur laay doone');
      });
}
}
