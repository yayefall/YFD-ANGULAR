import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfilsComponent} from './users/profils/profils.component';
import {UsersComponent} from './users/users.component';
import { AddProfilComponent } from './users/profils/add-profil/add-profil.component';
import {ListProfilComponent} from './users/profils/list-profil/list-profil.component';
import {AddUserComponent} from './users/add-user/add-user.component';
import {ListUserComponent} from './users/list-user/list-user.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DetailUserComponent} from './users/detail-user/detail-user.component';
import {ProfilsortiesComponent} from './profilsorties/profilsorties.component';
import {AddProfilsortieComponent} from './profilsorties/add-profilsortie/add-profilsortie.component';
import {ListProfilsortieComponent} from './profilsorties/list-profilsortie/list-profilsortie.component';
import {EditProfilsortieComponent} from './profilsorties/edit-profilsortie/edit-profilsortie.component';
import {CompetencesComponent} from './competences/competences.component';
import {AddCompentenceComponent} from './competences/add-compentence/add-compentence.component';
import {ListCompentenceComponent} from './competences/list-compentence/list-compentence.component';
import {EditCompentenceComponent} from './competences/edit-compentence/edit-compentence.component';
import {GroupecompetencesComponent} from './groupecompetences/groupecompetences.component';
import {AddGrpcompetenceComponent} from './groupecompetences/add-grpcompetence/add-grpcompetence.component';
import {EditGrpcompetenceComponent} from './groupecompetences/edit-grpcompetence/edit-grpcompetence.component';
import {ListGrpcompetenceComponent} from './groupecompetences/list-grpcompetence/list-grpcompetence.component';
import {GroupetagsComponent} from './groupetags/groupetags.component';
import {AddGrptagComponent} from './groupetags/add-grptag/add-grptag.component';
import {ListGrptagComponent} from './groupetags/list-grptag/list-grptag.component';
import {EditGrptagComponent} from './groupetags/edit-grptag/edit-grptag.component';
import {ReferentielsComponent} from './referentiels/referentiels.component';
import {AddRefernetielComponent} from './referentiels/add-refernetiel/add-refernetiel.component';
import {ListRefernetielComponent} from './referentiels/list-refernetiel/list-refernetiel.component';
import {EditRefernetielComponent} from './referentiels/edit-refernetiel/edit-refernetiel.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'users', component: UsersComponent },

  {path: 'users/add', component: AddUserComponent},
  {path: 'users/list', component: ListUserComponent},
  {path: 'users/:id', component: DetailUserComponent},

  {path: 'profils', component: ProfilsComponent},
  {path: 'profils/add', component: AddProfilComponent},
  {path: 'profils/list', component: ListProfilComponent},

  {path: 'profilsorties', component: ProfilsortiesComponent},
  {path: 'profilsorties/add', component: AddProfilsortieComponent},
  {path: 'profilsorties/list', component: ListProfilsortieComponent},
  {path: 'profilsorties/:id', component: EditProfilsortieComponent},

  {path: 'competences', component: CompetencesComponent},
  {path: 'competences/add', component: AddCompentenceComponent},
  {path: 'competences/list', component: ListCompentenceComponent},
  {path: 'competences/:id', component: EditCompentenceComponent},

  {path: 'groupecompetences', component: GroupecompetencesComponent},
  {path: 'groupecompetences/add', component: AddGrpcompetenceComponent},
  {path: 'groupecompetences/list', component: ListGrpcompetenceComponent},
  {path: 'groupecompetences/:id', component: EditGrpcompetenceComponent},

  {path: 'groupetags', component: GroupetagsComponent},
  {path: 'groupetags/add', component: AddGrptagComponent},
  {path: 'groupetags/list', component: ListGrptagComponent},
  {path: 'groupetags/:id', component: EditGrptagComponent},

  {path: 'referentiels', component: ReferentielsComponent},
  {path: 'referentiels/add', component: AddRefernetielComponent},
  {path: 'referentiels/list', component: ListRefernetielComponent},
  {path: 'referentiels/:id', component: EditRefernetielComponent},

  {path: 'not-found', component: PageNotFoundComponent },
  {path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
