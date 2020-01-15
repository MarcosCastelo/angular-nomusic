import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService, AuthGuard } from './services/auth.service';

import { MusicsComponent } from './musics/musics.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { ArtistsComponent } from './artists/artists.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  { path: '', pathMatch:'full' ,redirectTo: 'dashboard' },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'musics', component:MusicsComponent },
  { path: 'musics/:pk', component: MusicDetailComponent, canActivate: [AuthGuard] },
  { path: 'artists', component:ArtistsComponent },
  { path: 'artists/:pk', component: ArtistDetailComponent, canActivate: [AuthGuard]},
  { path: 'albums/:pk', component: AlbumDetailComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
