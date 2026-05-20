import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial.html',
  styleUrls: ['./historial.css'],
})
export class Historial {
  constructor(public personaService: PersonaService) {}
}
