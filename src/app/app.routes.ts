import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Mascotas } from './pages/personas/personas';
import { Historial } from './pages/historial/historial';
import { Turnos } from './pages/turnos/turnos';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'mascotas',
    component: Mascotas
  },

  {
    path: 'historial',
    component: Historial
  },

  {
    path: 'turnos',
    component: Turnos
  }

];