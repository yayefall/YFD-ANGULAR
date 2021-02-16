import {AfterViewInit, Component, OnInit, ViewChildren} from '@angular/core';
import {CollapseComponent} from 'angular-bootstrap-md';
import {ReferentielService} from '../../services/referentiel.service';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import {Users} from '../../modeles/users';
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
  programme: any;
 groupeCompetences: any;
  referentiels: any;
  p = 1;
  private id: any;
  // @ts-ignore
  @ViewChildren(CollapseComponent) collapses: CollapseComponent[];

  // @ts-ignore
 /* base64toBlob(base64Data, contentType = 'application/pdf'): any {
    contentType = contentType || '';
    // tslint:disable-next-line:prefer-const
    let sliceSize = 512;
    base64Data = base64Data.replace(/]+,/, '');
    base64Data = base64Data.replace(/\s/g, '');
    // tslint:disable-next-line:prefer-const
    let byteCharacters = window.atob(base64Data);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);
    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      const begin = sliceIndex * sliceSize;
      const end = Math.min(begin + sliceSize, bytesLength);
      const bytes = new Array(end - begin);
      for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
  }

  openProgramme(): any{
    for (const ref of this.referentiels) {
      const file = this.base64toBlob(ref.programme);
      const fileUrl = URL.createObjectURL(file);
      window.open(fileUrl, '_blank');
    }
  }*/
  ngAfterViewInit(): any {
    Promise.resolve().then(() => {
      this.collapses.forEach((collapse: CollapseComponent) => {
        collapse.toggle();
      });
    });
  }
  ngOnInit(): void {
    this.getReferentiels();

    this.id = this.route.snapshot.paramMap.get('id');
    this.referentielService.getReferentielById(this.id).subscribe(
      (data: any) => {
        this.referentiels = data;
      }
    );
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


  // generatePdf(): any {
     /* const documentDefinition = {content: `
        Prenom: ${this.referentiels.presentation}
        Nom: ${this.referentiels.critereAdmission}
        Username: ${this.referentiels.critereEvaluation}`
      } ;
      pdfMake.createPdf(documentDefinition).open();
    }*/


  openProgramme(): any {
    let objbuilder = '';
    objbuilder += ('<object width="100%" height="100%" data="data:application/pdf;base64,');
    objbuilder += (this.programme);
    objbuilder += ('" type="application/pdf" class="internal">');
    objbuilder += ('<embed src="data:application/pdf;base64,');
    objbuilder += (this.programme);
    objbuilder += ('" type="application/pdf"  />');
    objbuilder += ('</object>');
    const win = window.open('#', '_blank');
    const title = 'my tab title';
    win?.document.write('<html lang="Fr"><title>' + title + '</title><body style="margin-top: 0 px; margin-left: 0 px; margin-right: 0 px; margin-bottom: 0 px;">');
    win?.document.write(objbuilder);
    win?.document.write('</body></html>');
  }

}


