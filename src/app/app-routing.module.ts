import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component'
import { HomeComponent } from './pages/home/home.component'
import { MeComponent } from './pages/me/me.component'
import { RankingComponent } from './pages/ranking/ranking.component'
import { ChallengesComponent } from './pages/challenges/challenges.component'
import { AdminComponent } from './pages/admin/admin.component'

import { UserGuard } from '../app/services/user.guard';
import { AdminGuard } from '../app/services/admin.guard';

const routes: Routes = [
  {
    path: '',
     component: HomeComponent,
  },
  {
    path: 'mi-perfil',
    component: MeComponent,
    canActivate:[UserGuard]
  },
  {
    path: 'perfil/:user',
    component: ProfileComponent,
    canActivate:[UserGuard]
  },
  {
    path: 'top',
    component: RankingComponent,
    canActivate:[UserGuard]
  },{
    path: 'retos',
    component: ChallengesComponent,
    canActivate:[UserGuard]
  },{
    path: 'administracion',
    component: AdminComponent,
    canActivate:[UserGuard,AdminGuard]
  }
  
  ,
  { path: '**', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
