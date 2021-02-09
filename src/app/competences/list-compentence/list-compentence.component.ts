import { Component, OnInit } from '@angular/core';
import { GrpcompetenceService } from '../../services/grpcompetence.service';
import { CompetenceService } from '../../services/competence.service';

@Component({
  selector: 'app-list-compentenc',
  templateUrl: './list-compentence.component.html',
  styleUrls: ['./list-compentence.component.scss']
})
export class ListCompentenceComponent implements OnInit {
groupeCompetences: any = [];
competences: any = [];
niveaux: any = [];
p = 1;
  constructor(private grcompetenceService: GrpcompetenceService,
              private competenceService: CompetenceService)  { }

  ngOnInit(): void {
    this.grcompetenceService.getGroupCompetence().subscribe(
    (response: any) => {
    this.groupeCompetences = response;
    console.log(this.groupeCompetences);

    });
  }
  chargeCompetence(select: any): any{
    return this.competenceService.getCompetenceByGroup(select).subscribe(

    (response: any) => {
      this.competences = response;
      console.log(this.competences);

      });
  }
  openNiveau(index: number): any{
    this.niveaux = [];
    const clickedCompetence = this.competences[index];
    for (const n of clickedCompetence.niveaux){
      this.niveaux.push(n);
      }
    console.log(this.niveaux);
  }

  // tslint:disable-next-line:typedef
  deleteById(id: any) {
    if (confirm('Etes vous sure de vouloir supprimer')) {
   return this.competenceService.deleteCompetence(id).subscribe(
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
