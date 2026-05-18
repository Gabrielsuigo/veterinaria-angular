import { Component } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-persona-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './lista-personas.html',})
export class PersonaList {
  filtro = '';

  constructor(public personaService: PersonaService) {}

  eliminar(id: number) {
    this.personaService.eliminar(id);
  }
}