import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {
  tabs = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() { }

  ngOnInit(): void {
  }

}
