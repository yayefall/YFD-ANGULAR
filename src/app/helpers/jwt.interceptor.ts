import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ConnexionService} from '../services/connexion.service';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: ConnexionService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      console.log('Requette interceptée', currentUser.token);
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`,
          Accept: `application/json`
        }
      });
    }

    return next.handle(request);
  }
}
