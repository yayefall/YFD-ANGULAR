import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Profils} from '../modeles/profils';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  constructor(private http: HttpClient) {
  }

  getProfils(): Observable<Profils[]> {
    return this.http.get<Profils[]>(`${environment.apiUrl}/admin/profils`);
  }
}
