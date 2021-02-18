import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {ProfilService} from '../../../services/profil.service';
import {Users} from '../../../modeles/users';

@Component({
  selector: 'app-detail-profil',
  templateUrl: './detail-profil.component.html',
  styleUrls: ['./detail-profil.component.scss']
})
export class DetailProfilComponent implements OnInit {
  users: any;
  profils: any;
  p = 1;
  private id: any;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private profilService: ProfilService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.profilService.getProfilsById(this.id).subscribe(
      (data) => {
        // @ts-ignore
        this.profils = data;
        console.log(this.profils);
      });

  }

  deleteUserById(id: any): any {

  }
}
