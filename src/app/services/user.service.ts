import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../modeles/users';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${environment.apiUrl}/admin/users`);
  }
}
