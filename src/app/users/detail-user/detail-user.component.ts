import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import {Users} from '../../modeles/users';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  public users: any = [];
  private id: any;
  image: any;
  show = true;
  public allowEmptyString: any;
 // @ts-ignore
  apprenant: Users[];
  constructor(private  userService: UserService,
              private  route: ActivatedRoute) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUsersById(this.id).subscribe(
      (data: any) => {
        this.users = data;
        console.log(this.image);

        // this.image = 'data:image/jpg;base64,' + data.photo;
       /* this.allowEmptyString = `Bienvenue sur les détails de:
        ${this.users.image}
        Prenom: ${this.users.prenom}
        Nom: ${this.users.nom}
        Username: ${this.users.username}
        Telephone: ${this.users.telephone}
        Profils: ${this.users.profils.libelle}
        Genre: ${this.users.genre}`;*/
      });

  }


  generatePdf(): any {
    if (this.users.photo) {
      const dd = {
        content: [
          {text: 'Carte Etudiant ', style: 'header'},
          {text: 'Certe carte certifie bien que l\'apprenant est de l\'ODC', style: 'certify'},
          {
            image: `data:image/jpeg;base64,(${this.users.photo})`,
            width: 70,
          },
          {text: 'Informations relatives', style: 'subheader'},
          {
            style: 'tableExample',
            table: {
              body: [
                ['Prenom:', `${this.users.prenom}`],
                ['Nom:', `${this.users.nom}`],
                ['Email:', `${this.users.email}`],
                ['Telephone:', `${this.users.telephone}`],
              ]
            }
          },
          {
            columns : [
              { qr: this.users.prenom + '' + this.users.nom + '' + this.users.email,
                fit : 100, alignment: 'right', title: 'QR Student ID'},
            ]
          },
          {
            text: 'Signature' + `(${this.users.prenom})`,
            // alignment: 'right',
            fontSize: 13,
            bold: true,
            color: 'black',
          }
        ],
        styles: {
          header: {
            background: 'blue',
            width: 100,
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10],
          },
          subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 10, 0, 5],
            decoration: 'underline'
          },
          tableExample: {
            margin: [0, 5, 0, 15],
          },
          tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black'
          },
          certify: {
            margin: [0, 5, 0, 5],
          }
        },
      };
      pdfMake.createPdf(dd).open();
    }
  }
}
