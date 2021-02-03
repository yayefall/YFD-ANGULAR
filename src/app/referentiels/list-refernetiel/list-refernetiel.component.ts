import {AfterViewInit, Component, OnInit, ViewChildren} from '@angular/core';
import {CollapseComponent} from 'angular-bootstrap-md';
import {ReferentielService} from '../../services/referentiel.service';

@Component({
  selector: 'app-list-refernetiel',
  templateUrl: './list-refernetiel.component.html',
  styleUrls: ['./list-refernetiel.component.scss']
})
export class ListRefernetielComponent implements OnInit, AfterViewInit {

  constructor( private referentielService: ReferentielService) { }
  groupeCompetences: any;
  referentiels: any;
  // @ts-ignore
  @ViewChildren(CollapseComponent) collapses: CollapseComponent[];
  ngAfterViewInit(): any {
    Promise.resolve().then(() => {
      this.collapses.forEach((collapse: CollapseComponent) => {
        collapse.toggle();
      });
    });
  }
  ngOnInit(): void {
    this.getReferentiels();
  }
  getReferentiels(): any{
    this.referentielService.getReferentiel().subscribe(
      reponse => {
        this.referentiels = reponse;
        console.log(this.referentiels);
      },
      error => {
        alert('il ya erreur de recuperation des données');
      });
  }

  deleteById(id: any): any {
    if (confirm('Etes-vous sure de vouloir supprimer ce referentiel')) {
      this.referentielService.deleteReferentiel(id).subscribe(
        (data: any) => {
          console.log(data);
          alert('suppression avec success');
        },
        (error: any) => {
          alert(' il ya une error dee');
        });
    }
  }
}
