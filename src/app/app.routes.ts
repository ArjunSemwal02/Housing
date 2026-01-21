import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Housing } from './pages/housing/housing';
import { Signup } from './pages/signup/signup';
import { Login } from './pages/login/login';
import { Details } from './reusables/details/details';
import { Registered } from './pages/registered/registered';
import { AuthGuard } from './auth/auth-guard';

export const routes: Routes = [
  // { path: '', component: Dashboard },
  // { path: 'housing', component: Housing },
  // { path: 'registered', component: Registered, canActivate: [AuthGuard] },
  // { path: 'signup', component: Signup },
  // { path: 'login', component: Login },
  // { path: 'details/:id', component: Details },
  // {
  //   path: 'housing',
  //   loadChildren: () => import('./pages/housing/housing').then((m) => m.Housing),
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  // },
  // {
  //   path: 'registered',
  //   loadChildren: () => import('./pages/registered/registered').then((m) => m.Registered),
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./pages/signup/signup').then((m) => m.Signup),
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login').then((m) => m.Login),
  // },
  // {
  //   path: 'details',
  //   loadChildren: () => import('./reusables/details/details').then((m) => m.Details),
  // },
  // {
  //   path: '',
  //   redirectTo: 'housing',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '**',
  //   redirectTo: 'housing',
  // },

  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'housing',
    loadComponent: () => import('./pages/housing/housing').then((m) => m.Housing),
  },
  {
    path: 'registered',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/registered/registered').then((m) => m.Registered),
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup').then((m) => m.Signup),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./reusables/details/details').then((m) => m.Details),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
