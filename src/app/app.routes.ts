import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Mascotas } from './pages/personas/personas';
import { Historial } from './pages/historial/historial';
import { Turnos } from './pages/turnos/turnos';
import { DetalleMascota } from './pages/detalle-mascota/detalle-mascota';

export const routes: Routes = [
  {
    path: '',
    component: Home,
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
