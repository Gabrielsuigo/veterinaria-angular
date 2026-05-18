import { Component } from '@angular/core';
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
  imports: [FormsModule,MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, CommonModule],
  templateUrl: './persona-form.html',
  styleUrl: './persona-form.css',
})
export class PersonaForm {
nombre = '';
especie = '';
raza = '';
edad = 0;
duenio = '';
imagen = '';

  constructor(private personaService: PersonaService) {}

  seleccionarImagen(event: any) {

  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {

    this.imagen = reader.result as string;

  };

  reader.readAsDataURL(file);
}

  agregar() {
    if (!this.nombre || !this.edad) return;

    this.personaService.agregar({
      nombre: this.nombre,
      edad: this.edad,
      especie: this.especie,
      raza: this.raza,
      duenio: this.duenio,
      imagen: this.imagen,
    });

     this.nombre = '';
     this.especie = '';
     this.raza = '';
     this.edad = 0;
     this.duenio = '';
     this.imagen = '';
  }
}