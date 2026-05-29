import { Component, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AuthService } from './core/auth/services/auth.service';

@Component({
  selector: 'app-root',

  standalone: true,

  imports: [RouterOutlet, RouterModule, CommonModule, MatToolbarModule, MatButtonModule],

  templateUrl: './app.html',

  styleUrl: './app.css',
})
export class App {
  authService = inject(AuthService);

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout() {
    this.authService.logout();
  }
}
