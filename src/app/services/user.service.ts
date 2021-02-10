import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Users} from '../modeles/users';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private headerJson = new HttpHeaders({'Content-type': 'application/json'});
  private headerFormData = new HttpHeaders({Accept: '*/*'});
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${environment.apiUrl}/admin/users?archivage=0`);
  }

  postUsers(body: FormData): any{
    return this.http.post(`${environment.apiUrl}/admin/users`,
     body, { headers : this.headerFormData} );
  }

  getUsersById(id: any): any{
    return this.http.get (`${environment.apiUrl}/admin/users/` + id);
  }
  // tslint:disable-next-line:typedef
  putUsers( body: FormData, id: number): any{
   return this.http.put(`${environment.apiUrl}/admin/users/` + id,
    body, { headers : this.headerFormData} );
  }

  deleteUsers(id: any): any{
    return this.http.delete(`${environment.apiUrl}/admin/users/` + id);
  }
}
