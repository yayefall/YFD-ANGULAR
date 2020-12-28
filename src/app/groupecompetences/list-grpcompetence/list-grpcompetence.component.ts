import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-grpcompetence',
  templateUrl: './list-grpcompetence.component.html',
  styleUrls: ['./list-grpcompetence.component.scss']
})
export class ListGrpcompetenceComponent implements OnInit {
  tabs = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() { }

  ngOnInit(): void {
  }

}
