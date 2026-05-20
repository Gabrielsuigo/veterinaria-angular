import { Component, effect, inject, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persona-form',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './persona-form.html',
  styleUrl: './persona-form.css',
})
export class PersonaForm {
  nombre = '';
  editando = false;
  especie = '';
  raza = '';
  edad = 0;
  duenio = '';
  imagen = '';

  mascotaId: number | null = null;
  injector = inject(Injector);

  constructor(private personaService: PersonaService) {
    effect(() => {
      const mascota = this.personaService.mascotaEditando();

      if (mascota) {
        this.editando = true;

        this.nombre = mascota.nombre;
        this.especie = mascota.especie;
        this.raza = mascota.raza;
        this.edad = mascota.edad;
        this.duenio = mascota.duenio;
        this.imagen = mascota.imagen;
      }
    });
  }
  seleccionarImagen(event: any) {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      this.imagen = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  cargarMascota(mascota: any) {
    this.editando = true;

    this.mascotaId = mascota.id;

    this.nombre = mascota.nombre;
    this.especie = mascota.especie;
    this.raza = mascota.raza;
    this.edad = mascota.edad;
    this.duenio = mascota.duenio;
    this.imagen = mascota.imagen;
  }

  agregar() {
    if (!this.nombre || !this.edad) return;

    const mascota = {
      nombre: this.nombre,
      edad: this.edad,
      especie: this.especie,
      raza: this.raza,
      duenio: this.duenio,
      imagen: this.imagen,

      vacunas: [],
      consultas: [],
    };

    if (this.editando) {
      const mascotaActual = this.personaService.mascotaEditando();

      if (mascotaActual) {
        this.personaService.editar(mascotaActual.id, mascota);
      }

      this.editando = false;

      this.personaService.mascotaEditando.set(null);
    } else {
      this.personaService.agregar(mascota);
    }

    this.nombre = '';
    this.especie = '';
    this.raza = '';
    this.edad = 0;
    this.duenio = '';
    this.imagen = '';
  }
}
