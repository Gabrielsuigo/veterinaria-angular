import { Injectable, signal, computed } from '@angular/core';

export interface Usuario {
  nombre: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuario = signal<Usuario | null>(this.obtenerUsuario());

  estaLogueado = computed(() => this.usuario() !== null);

  login(nombre: string, email: string) {
    const usuario = {
      nombre,
      email,
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario.set(usuario);
  }

  logout() {
    localStorage.removeItem('usuario');

    this.usuario.set(null);
  }

  private obtenerUsuario(): Usuario | null {
    const usuario = localStorage.getItem('usuario');

    return usuario ? JSON.parse(usuario) : null;
  }
}
