import {AfterViewInit, Component, OnInit, ViewChildren} from '@angular/core';
import {GrpcompetenceService} from '../../services/grpcompetence.service';
import {CollapseComponent} from 'angular-bootstrap-md';

@Component({
  selector: 'app-list-grpcompetence',
  templateUrl: './list-grpcompetence.component.html',
  styleUrls: ['./list-grpcompetence.component.scss']
})
export class ListGrpcompetenceComponent implements OnInit, AfterViewInit{

  constructor(private grpcompetenceService: GrpcompetenceService) { }
  tabs: any ;
  p = 1;
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
    this.getGrpcompetences();
  }

  getGrpcompetences(): any{
    this.grpcompetenceService.getGroupCompetence().subscribe(
      reponse => {
        this.tabs = reponse;
        console.log(this.tabs);
      },
      error => {
        alert('il ya erreur de recuperation des données');
      });
  }


deleteById(id: any): any {
  if (confirm('Etes vous sure de vouloir supprimer')) {
    this.grpcompetenceService.deleteGroupeCompetence(id).subscribe(
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
