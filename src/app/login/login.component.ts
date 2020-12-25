import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() {
    // console.log('1  ' + this.maConnexion);
  }
  // @ts-ignore
  // maConnexion = false;
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
 /* getConnexion(){
    this.maConnexion = true;
  }*/
}
