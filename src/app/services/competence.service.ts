import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Competence} from '../modeles/competence';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  private headerJson = new HttpHeaders({'Content-type': 'application/json'});
  constructor(private http: HttpClient) { }

  getCompetence(): Observable<Competence[]> {
    return this.http.get<Competence[]>(`${environment.apiUrl}/admin/competences?archivage=0`);
  }
  getCompetenceByGroup(id: number): any{
    return   this.http.get(`${environment.apiUrl}/admin/groupe_competences/${id}/competences`);
}
  postCompetence(body: any): any{
    return this.http.post(`${environment.apiUrl}/admin/competences`,
      body, { headers : this.headerJson});
  }

  putCompetence( body: any, id: number): any {
    return this.http.put(`${environment.apiUrl}/admin/competences/` + id,
      body, {headers: this.headerJson});
  }
  getCompetenceById(id: any): any {
    return this.http.get (`${environment.apiUrl}/admin/competences/` + id);
  }
  deleteCompetence(id: any): any{
    return this.http.delete(`${environment.apiUrl}/admin/competences/` + id);
  }
}
