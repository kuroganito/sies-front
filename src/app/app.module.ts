import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ChallengesComponent } from './pages/challenges/challenges.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MeComponent } from './pages/me/me.component';

import { AuthService } from './services/auth.service';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';
import { HeaderComponent } from './components/header/header.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminChallengesComponent } from './components/admin-challenges/admin-challenges.component';
import { ModalUserComponent } from './components/modal-user/modal-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    LoginComponent,
    ChallengesComponent,
    RankingComponent,
    AdminComponent,
    MeComponent,
    HeaderComponent,
    AdminUsersComponent,
    AdminChallengesComponent,
    ModalUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  entryComponents: [ModalUserComponent],
  providers: [AuthService, UserGuard,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
