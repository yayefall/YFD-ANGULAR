import { Component } from '@angular/core';
import {ConnexionService} from './services/connexion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'YFD-ANGULAR';
    constructor(public connexion: ConnexionService) {
    }
}
