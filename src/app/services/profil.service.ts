import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Profils} from '../modeles/profils';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private headerJson = new HttpHeaders({'Content-type': 'application/json'});
  constructor(private http: HttpClient) {
  }

  getProfils(): Observable<Profils[]> {
    return this.http.get<Profils[]>(`${environment.apiUrl}/admin/profils?archivage=0`);
  }
  // tslint:disable-next-line:typedef
   postProfils(body: any){
    return this.http.post(`${environment.apiUrl}/admin/profils`,
      body, { headers : this.headerJson}
    );
  }
   putProfils(body: any, id: number): any{
    return this.http.put(`${environment.apiUrl}/admin/profils/` + id,
      body, { headers : this.headerJson}
    );
  }
  // tslint:disable-next-line:typedef
  getProfilsById(id: any)  {
    return this.http.get (`${environment.apiUrl}/admin/profils/` + id);
  }
  deleteProfils(id: any): any{
    return this.http.delete(`${environment.apiUrl}/admin/profils/` + id);
  }
}
