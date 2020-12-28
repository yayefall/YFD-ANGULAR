import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-refernetiel',
  templateUrl: './list-refernetiel.component.html',
  styleUrls: ['./list-refernetiel.component.scss']
})
export class ListRefernetielComponent implements OnInit {
  tabs = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() { }

  ngOnInit(): void {
  }

}
