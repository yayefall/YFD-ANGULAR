import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Profilsorties} from '../modeles/profilsorties';



@Injectable({
  providedIn: 'root'
})
export class ProfilsortiService {

  private headerJson = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  getProfilsortie(): Observable<Profilsorties[]> {
    return this.http.get<Profilsorties[]>(`${environment.apiUrl}/admin/profilsorties?archivage=0`);
  }

  postProfilsorties(body: any): any{
    return this.http.post(`${environment.apiUrl}/admin/profilsorties`,
      body, { headers : this.headerJson} );
  }

  putProfilsorties(body: any, id: number): any{
    return this.http.put(`${environment.apiUrl}/admin/profilsorties/` + id,
      body, { headers : this.headerJson});
  }

  getProfilsortieById(id: any): any{
    return this.http.get (`${environment.apiUrl}/admin/profilsorties/` + id);
  }
  deleteProfilsorties(id: any): any{
    return this.http.delete(`${environment.apiUrl}/admin/profilsorties/` + id);
  }
}
