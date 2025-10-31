import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Housing } from './pages/housing/housing';
import { Signup } from './pages/signup/signup';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard
    },
    {
        path: 'housing',
        component: Housing
    },
    {
        path: 'signup',
        component: Signup
    },
    {
        path: 'login',
        component: Login
    }
];
