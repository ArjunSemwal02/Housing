import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Housing } from './pages/housing/housing';
import { Signup } from './pages/signup/signup';
import { Login } from './pages/login/login';
import { Details } from './reusables/details/details';
import { Registered } from './pages/registered/registered';
import { AuthGuard } from './auth/auth-guard';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'housing', component: Housing },
  { path: 'registered', component: Registered, canActivate: [AuthGuard] },
  { path: 'signup', component: Signup },
  { path: 'login', component: Login },
  { path: 'details/:id', component: Details },
  // { path: '', redirectTo: 'housing', pathMatch: 'full' },
];
