import { Component, computed, inject } from '@angular/core';

import { Router, RouterModule, RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AuthService } from './core/auth/services/auth.service';

@Component({
  selector: 'app-root',

  standalone: true,

  imports: [RouterOutlet, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule],

  templateUrl: './app.html',

  styleUrl: './app.css',
})
export class App {
  authService = inject(AuthService);

  router = inject(Router);

  mostrarLayout = computed(() => {
    return this.router.url !== '/login' && this.router.url !== '/register';
  });

  logout() {
    this.authService.logout();

    this.router.navigate(['/login']);
  }
}
