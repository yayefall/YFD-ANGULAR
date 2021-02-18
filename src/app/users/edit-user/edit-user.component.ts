import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProfilService} from '../../services/profil.service';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Users} from '../../modeles/users';


@Component({
  selector: 'app-detail-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  constructor(private formbuilder: FormBuilder,
              private profilService: ProfilService,
              private userService: UserService,
              private  route: ActivatedRoute,
              private router: Router) { }

  public users: any;
  private id: any ;
  public profils: any = [];
  // @ts-ignore
  fileToUpload: File ;
  url = '';

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

  handleFileInput(e: any): any {
    if (e.target.files && e.target.files[0]) {
      this.fileToUpload = e.target.files[0];
      console.log( this.formdata.controls.profils.value);
      // tslint:disable-next-line:prefer-const
      let reader = new FileReader();

      reader.readAsDataURL(e.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        console.log(event);
        this.url = event.target.result;
        console.log(this.url);
      };
    }
  }

  ngOnInit(): void {
   this.profilService.getProfils().subscribe(
      reponse  => {
        this.profils = reponse;
        console.log(this.profils);
      }
    );

   this.id = this.route.snapshot.paramMap.get('id'); // il permet recuperer la valeur de l'id
   this.userService.getUsersById(this.id).subscribe(
      (data: Users) => {
        this.formdata.patchValue(data);

       /* this.users = data;
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
        photo.value = this.users.photo;*/
      });
  }


  onSubmit(): any {
    const formData = new FormData();
    formData.append('nom', this.formdata.get('nom')?.value);
    formData.append('prenom', this.formdata.get('prenom')?.value);
    formData.append('username', this.formdata.get('username')?.value);
    formData.append('email', this.formdata.get('email')?.value);
    formData.append('genre', this.formdata.get('gender')?.value);
    formData.append('photo', this.fileToUpload);
    formData.append('telephone', this.formdata.get('telephone')?.value);
    formData.append('_method', 'put');
    console.log(this.formdata);
    this.userService.putUsers(formData, this.id).subscribe(
      (data: any) => {
        console.log(data);
       // alert(data);
        alert('modification reussie');
        this.router.navigate(['/users/list']);
      },
      (error: any) => {
        alert('modification echec');
       }
      );
  }
}
