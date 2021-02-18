import {AfterViewInit, Component, OnInit, ViewChildren} from '@angular/core';
import {CollapseComponent} from 'angular-bootstrap-md';
import {ReferentielService} from '../../services/referentiel.service';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import {ActivatedRoute, Router} from '@angular/router';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-list-refernetiel',
  templateUrl: './list-refernetiel.component.html',
  styleUrls: ['./list-refernetiel.component.scss']
})
export class ListRefernetielComponent implements OnInit, AfterViewInit {

  constructor( private referentielService: ReferentielService,
               private route: ActivatedRoute,
               private router: Router) {
  }
  myWidth = 100;
  myHeight = 80;

  pdfSrc: any;
  programme: any;
 groupeCompetences: any;
  referentiels: any;
  p = 1;
  private id: any;
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
    this.loadProgramme();

  /*  this.id = this.route.snapshot.paramMap.get('id'); // recupere la valeur de l'id
    console.log(this.id);
    this.referentielService.getReferentielById(this.id).subscribe(
      (data: any) => {
        this.referentiels = data;
        console.log(data);
       // this.pdfSrc = this.base64ToArrayBuffer(this.referentiels.programme);
      });*/
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
          this.router.navigate(['/referentiels/list']);
        },
        (error: any) => {
          alert(' il ya une error dee');
        });
    }
  }


  loadProgramme(): any{
    if (this.programme) {
      const byteArray = new Uint8Array(atob(this.programme).split('').map(char => char.charCodeAt(0)));
      const blob = new Blob([byteArray], {type: 'application/pdf'});
      if (blob){
        const url = window.URL.createObjectURL(blob);
        if (url !== null){
          // @ts-ignore
          // document.querySelector('iframe' + this.index).src = url;
          document.getElementById('iframe_' + this.i).setAttribute('src', url);
        }
      }
    }
  }

}


