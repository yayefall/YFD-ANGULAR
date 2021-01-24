import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProfilService} from '../../services/profil.service';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-detail-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  constructor(private formbuilder: FormBuilder,
              private profilService: ProfilService,
              private userService: UserService,
              private  route: ActivatedRoute) { }

  public users: any;
  private id: any ;
  profils: any;
  photo: any;
  // @ts-ignore
  fileToUpload: File ;

  formdata = this.formbuilder.group({
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    telephone: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    profils: ['', [Validators.required]],
    photo: ['', [Validators.required]],

  });

  // tslint:disable-next-line:typedef
  handleFileInput(e: any) {
    this.fileToUpload = e.target.files[0];
   // console.log( this.formdata.controls.users.value);
  }

  ngOnInit(): void {
   this.profilService.getProfils().subscribe(
      reponse  => {
        this.profils = reponse;
       // console.log(this.profils);
      }
    );

   this.id = this.route.snapshot.paramMap.get('id'); // il permet recuperer la valeur de l'id
   this.userService.getUsersById(this.id).subscribe(
      (data) => {
        this.users = data;
        const nom = document.getElementById('nom');
        const prenom = document.getElementById('prenom');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const telephone = document.getElementById('telephone');
        const genre = document.getElementById('gender');
        const profils = document.getElementById('profils');
        const photo = document.getElementById('photo');
        // @ts-ignore
        nom.value = this.users.nom;
        // @ts-ignore
        prenom.value = this.users.prenom;
        // @ts-ignore
        username.value = this.users.username;
        // @ts-ignore
        email.value = this.users.email;
        // @ts-ignore
        telephone.value = this.users.telephone;
        // @ts-ignore
        genre.value = this.users.gender;
        // @ts-ignore
        profils.value = this.users.profils;
        // @ts-ignore
        photo.value = this.users.photo;
      });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {

  }
}
