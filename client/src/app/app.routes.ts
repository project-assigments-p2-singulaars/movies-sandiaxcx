import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: ProfilesComponent
  // },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'movies/:id',
    component: MovieComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];
