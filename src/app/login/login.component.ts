import {Component, Input, OnInit} from '@angular/core';
import {Users} from '../modeles/users';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ConnexionService} from '../services/connexion.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  loginForm: FormGroup;
  submitted = false;
  returnUrl!: string;

   currentUser: Users;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: ConnexionService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    /*if (this.authenticationService.currentUserValue) {
      this.getToken();
    }*/
  }

  get f(): any {
    return this.loginForm.controls;
  }

  onSubmit(): any {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          const decodedToken = this.authenticationService.getMyToken();
          console.log(decodedToken);
        //  if (decodedToken.archivage === false){
          if (decodedToken.roles[0] === 'ROLE_ADMIN'){
            this.router.navigate(['/admin']);
          }
        /*  }else {
            console.log('Connexion impossible, Veuillez vous connecter');
          }*/
          // this.router.navigate(['admin']);
          console.log(this.authenticationService.getMyToken());
        });
  }

  // tslint:disable-next-line:typedef
  /* getConnexion(){
     this.maConnexion = true;
   }*/


  // tslint:disable-next-line:typedef
 /* getToken(){
    // tslint:disable-next-line:prefer-const
    let token = this.currentUser.token;
    // @ts-ignore
    // const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    const isExpired = helper.isTokenExpired(token);
    const expirationDate = helper.getTokenExpirationDate(token);
    if (decodedToken.roles[0] === 'ROLE_ADMIN'){
      this.router.navigate(['/admin']);
    }
  }*/


}
