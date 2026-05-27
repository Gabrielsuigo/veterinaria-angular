import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../../core/auth/services/auth.service';

@Component({
  selector: 'app-register',

  standalone: true,

  imports: [CommonModule, FormsModule, RouterModule],

  templateUrl: './register.html',

  styleUrl: './register.css',
})
export class Register {
  authService = inject(AuthService);

  router = inject(Router);

  nombre = '';

  email = '';

  password = '';

  error = '';

  registrarse() {
    this.error = '';

    const registrado = this.authService.registrar({
      nombre: this.nombre,
      email: this.email,
      password: this.password,
    });

    if (!registrado) {
      this.error = 'Ya existe un usuario con ese email';

      return;
    }

    this.router.navigate(['/login']);
  }
}
