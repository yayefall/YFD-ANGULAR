import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
import { ProfilsComponent } from './users/profils/profils.component';
import { AddProfilComponent } from './users/profils/add-profil/add-profil.component';
import { ListProfilComponent } from './users/profils/list-profil/list-profil.component';
import { EditProfilComponent } from './users/profils/edit-profil/edit-profil.component';
import { ProfilsortiesComponent } from './profilsorties/profilsorties.component';
import { AddProfilsortieComponent } from './profilsorties/add-profilsortie/add-profilsortie.component';
import { ListProfilsortieComponent } from './profilsorties/list-profilsortie/list-profilsortie.component';
import { EditProfilsortieComponent } from './profilsorties/edit-profilsortie/edit-profilsortie.component';
import { CompetencesComponent } from './competences/competences.component';
import { AddCompentenceComponent } from './competences/add-compentence/add-compentence.component';
import { ListCompentenceComponent } from './competences/list-compentence/list-compentence.component';
import { EditCompentenceComponent } from './competences/edit-compentence/edit-compentence.component';
import { GroupecompetencesComponent } from './groupecompetences/groupecompetences.component';
import { AddGrpcompetenceComponent } from './groupecompetences/add-grpcompetence/add-grpcompetence.component';
import { ListGrpcompetenceComponent } from './groupecompetences/list-grpcompetence/list-grpcompetence.component';
import { EditGrpcompetenceComponent } from './groupecompetences/edit-grpcompetence/edit-grpcompetence.component';
import { ReferentielsComponent } from './referentiels/referentiels.component';
import { AddRefernetielComponent } from './referentiels/add-refernetiel/add-refernetiel.component';
import { ListRefernetielComponent } from './referentiels/list-refernetiel/list-refernetiel.component';
import { EditRefernetielComponent } from './referentiels/edit-refernetiel/edit-refernetiel.component';
import { LoginComponent } from './login/login.component';
import { GroupetagsComponent } from './groupetags/groupetags.component';
import { AddGrptagComponent } from './groupetags/add-grptag/add-grptag.component';
import { ListGrptagComponent } from './groupetags/list-grptag/list-grptag.component';
import { EditGrptagComponent } from './groupetags/edit-grptag/edit-grptag.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    AddUserComponent,
    ListUserComponent,
    DetailUserComponent,
    ProfilsComponent,
    AddProfilComponent,
    ListProfilComponent,
    EditProfilComponent,
    ProfilsortiesComponent,
    AddProfilsortieComponent,
    ListProfilsortieComponent,
    EditProfilsortieComponent,
    CompetencesComponent,
    AddCompentenceComponent,
    ListCompentenceComponent,
    EditCompentenceComponent,
    GroupecompetencesComponent,
    AddGrpcompetenceComponent,
    ListGrpcompetenceComponent,
    EditGrpcompetenceComponent,
    ReferentielsComponent,
    AddRefernetielComponent,
    ListRefernetielComponent,
    EditRefernetielComponent,
    LoginComponent,
    GroupetagsComponent,
    AddGrptagComponent,
    ListGrptagComponent,
    EditGrptagComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
