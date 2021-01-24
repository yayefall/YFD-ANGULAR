import { Component, OnInit, AfterViewInit, ViewChildren} from '@angular/core';
import {CollapseComponent} from 'angular-bootstrap-md';

@Component({
  selector: 'app-groupecompetences',
  templateUrl: './groupecompetences.component.html',
  styleUrls: ['./groupecompetences.component.scss']
})
export class GroupecompetencesComponent implements AfterViewInit {

  constructor() { }

  // @ts-ignore
  @ViewChildren(CollapseComponent) collapses: CollapseComponent[];

  ngAfterViewInit(): any {
    Promise.resolve().then(() => {
      this.collapses.forEach((collapse: CollapseComponent) => {
        collapse.toggle();
      });
    });
  }

}
