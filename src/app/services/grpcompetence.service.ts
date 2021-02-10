import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Groupecompetences} from '../modeles/groupecompetences';

@Injectable({
  providedIn: 'root'
})
export class GrpcompetenceService {

  private headerJson = new HttpHeaders({'Content-type': 'application/json'});
  constructor(private http: HttpClient) { }

  getGroupCompetence(): Observable<Groupecompetences[]> {
    return this.http.get<Groupecompetences[]>(`${environment.apiUrl}/admin/groupe_competences?archivage=0`);
  }

  postGroupeCompetence(body: any): any{
    return this.http.post(`${environment.apiUrl}/admin/groupe_competences`,
  body, { headers : this.headerJson});
  }

  putGroupeCompetence(body: any, id: number): any {
    return this.http.put(`${environment.apiUrl}/admin/groupe_competences/${id}`,
      body, {headers: this.headerJson});
  }
  getGrpCompetenceById(id: any): any {
    return this.http.get (`${environment.apiUrl}/admin/groupe_competences/` + id);
  }
  deleteGroupeCompetence(id: any): any{
    return this.http.delete(`${environment.apiUrl}/admin/groupe_competences/` + id);
  }
}
