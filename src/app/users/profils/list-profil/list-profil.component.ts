import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.scss']
})
export class ListProfilComponent implements OnInit {
  tabs = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit(): void {
  }

}
