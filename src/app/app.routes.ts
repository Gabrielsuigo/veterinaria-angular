import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Mascotas } from './pages/personas/personas';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'mascotas', component: Mascotas },
];