import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from '../../core/services/mascota.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detalle-mascota',

  standalone: true,

  imports: [MatIconModule],

  templateUrl: './detalle-mascota.html',

  styleUrl: './detalle-mascota.css',
})
export class DetalleMascota {
  route = inject(ActivatedRoute);

  mascotaService = inject(MascotaService);

  id = Number(this.route.snapshot.paramMap.get('id'));

  mascota = computed(() => this.mascotaService.mascotas().find((m) => m.id === this.id));
}
