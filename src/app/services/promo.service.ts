import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  private headerJson = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  postPromo(body: any): any{
    return this.http.post(`${environment.apiUrl}/admin/promos`,
      body, { headers : this.headerJson} );
  }
}
