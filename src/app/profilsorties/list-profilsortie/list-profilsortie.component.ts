import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-profilsortie',
  templateUrl: './list-profilsortie.component.html',
  styleUrls: ['./list-profilsortie.component.scss']
})
export class ListProfilsortieComponent implements OnInit {
  tabs = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit(): void {
  }

}
