import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Referentiel} from '../modeles/referentiel';


@Injectable({
  providedIn: 'root'
})
export class ReferentielService {

  // private headerJson = new HttpHeaders({'Content-type': 'application/json'}); si cest type json
  private headerFormData = new HttpHeaders({Accept: '*/*'}); // si cest formdata
  constructor(private http: HttpClient) { }

  getReferentiel(): Observable<Referentiel[]> {
    return this.http.get<Referentiel[]>(`${environment.apiUrl}/admin/referentiels?archivage=0`);
  }

  postReferentiel(body: any): any{
    return this.http.post(`${environment.apiUrl}/admin/referentiels`,
      body, { headers : this.headerFormData});
  }

  putReferentiel(body: any, id: number): any {
    return this.http.post(`${environment.apiUrl}/admin/referentiels/` + id,
      body, {headers: this.headerFormData});
  }
  getReferentielById(id: any): any {
    return this.http.get (`${environment.apiUrl}/admin/referentiels/` + id);
  }
  deleteReferentiel(id: any): any{
    return this.http.delete(`${environment.apiUrl}/admin/referentiels/` + id);
  }
}
