import { Component, computed, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { MascotaService } from '../../core/services/mascota.service';

@Component({
  selector: 'app-home',

  standalone: true,

  imports: [MatCardModule, MatButtonModule, RouterModule, MatIconModule],

  templateUrl: './home.html',

  styleUrl: './home.css',
})
export class Home {
  mascotaService = inject(MascotaService);

  mascotas = this.mascotaService.mascotas;

  totalMascotas = computed(() => this.mascotas().length);

  totalVacunas = computed(() =>
    this.mascotas().reduce((acc, mascota) => acc + mascota.vacunas.length, 0),
  );

  totalConsultas = computed(() =>
    this.mascotas().reduce((acc, mascota) => acc + mascota.consultas.length, 0),
  );

  mascotasRecientes = computed(() => [...this.mascotas()].reverse().slice(0, 3));
}
