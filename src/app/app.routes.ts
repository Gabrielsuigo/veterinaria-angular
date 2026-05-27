import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Mascotas } from './pages/personas/personas';
import { Historial } from './pages/historial/historial';
import { Turnos } from './pages/turnos/turnos';
import { DetalleMascota } from './pages/detalle-mascota/detalle-mascota';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: Login,
  },

  {
    path: 'register',
    component: Register,
  },

  {
    path: 'dashboard',
    component: Dashboard,
  },

  {
    path: 'mascotas',
    component: Mascotas,
  },

  {
    path: 'mascotas/:id',
    component: DetalleMascota,
  },

  {
    path: 'historial',
    component: Historial,
  },

  {
    path: 'turnos',
    component: Turnos,
  },
];
