import { Component } from '@angular/core';
import { PersonaForm } from '../../components/persona-form/persona-form';
import { PersonaList } from '../../lista-personas/lista-personas';
import { MatCardModule } from '@angular/material/card';
import { PersonaService } from '../../services/persona.service';



@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [PersonaForm, PersonaList, MatCardModule],
  templateUrl: './personas.html',
})
export class Mascotas {
    constructor(public personaService: PersonaService) {}

}