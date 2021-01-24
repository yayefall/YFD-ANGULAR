import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {ProfilService} from '../../services/profil.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private formbuilder: FormBuilder,
              private userService: UserService,
              private profilService: ProfilService) { }
  // @ts-ignore
  fileToUpload: File ;
  image: any;
  profils: any;

  formdata = this.formbuilder.group({
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    profils: ['', [Validators.required]],
    photo: ['', [Validators.required]],
    telephone: ['', [Validators.required]],

  });

  // tslint:disable-next-line:typedef
  handleFileInput(e: any) {
    this.fileToUpload = e.target.files[0];
    console.log( this.formdata.controls.profils.value);
  }


  ngOnInit(): void {
    this.profilService.getProfils().subscribe(
      reponse  => {
        this.profils = reponse;
        console.log(this.profils);
      }
    );
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    const formData = new FormData();
    formData.append('nom', this.formdata.get('nom')?.value);
    formData.append('prenom', this.formdata.get('prenom')?.value);
    formData.append('username', this.formdata.get('username')?.value);
    formData.append('email', this.formdata.get('email')?.value);
    formData.append('genre', this.formdata.get('gender')?.value);
    formData.append('profils', this.formdata.get('profils')?.value);
    formData.append('photo', this.fileToUpload);
    formData.append('telephone', this.formdata.get('telephone')?.value);
    console.log(this.formdata);
    return this.userService.postUsers(formData).subscribe(
      (data) => {
        console.log(data);
        alert('insertion successfull');
      },
      error => {
        alert('il ya une erreur deeeeeeeeeeeeeee');
        console.log(error);
      }
    );
  }
}
