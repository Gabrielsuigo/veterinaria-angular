import { Injectable, signal } from '@angular/core';

export interface Vacuna {
  nombre: string;
  fecha: string;
}

export interface Consulta {
  motivo: string;
  diagnostico: string;
  peso: number;
  fecha: string;
}

export interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  duenio: string;
  imagen: string;
  vacunas: Vacuna[];
  consultas: Consulta[];
}

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  mascotas = signal<Mascota[]>(this.cargar());
  mascotaEditando = signal<Mascota | null>(null);

  private guardar(data: Mascota[]) {
    localStorage.setItem('mascotas', JSON.stringify(data));
  }

  private cargar(): Mascota[] {
    const data = localStorage.getItem('mascotas');
    return data ? JSON.parse(data) : [];
  }

  agregar(mascota: Omit<Mascota, 'id'>) {
    this.mascotas.update((lista) => {
      const nueva = [
        ...lista,
        {
          ...mascota,
          id: Date.now(),
          vacunas: [],
          consultas: [],
        },
      ];

      this.guardar(nueva);

      return nueva;
    });
  }

  eliminar(id: number) {
    this.mascotas.update((lista) => {
      const nueva = lista.filter((m) => m.id !== id);

      this.guardar(nueva);

      return nueva;
    });
  }

  editar(id: number, datos: Partial<Mascota>) {
    this.mascotas.update((lista) => {
      const nueva = lista.map((m) => (m.id === id ? { ...m, ...datos } : m));

      this.guardar(nueva);

      return nueva;
    });
  }

  agregarVacuna(id: number, vacuna: Vacuna) {
    this.mascotas.update((lista) => {
      const nueva = lista.map((m) =>
        m.id === id
          ? {
              ...m,
              vacunas: [...(m.vacunas || []), vacuna],
            }
          : m,
      );

      this.guardar(nueva);

      return nueva;
    });
  }
  agregarConsulta(
    id: number,

    consulta: Consulta,
  ) {
    this.mascotas.update((lista) => {
      const nueva = lista.map((m) =>
        m.id === id
          ? {
              ...m,

              consultas: [...(m.consultas || []), consulta],
            }
          : m,
      );

      this.guardar(nueva);

      return nueva;
    });
  }

  eliminarVacuna(
    mascotaId: number,

    index: number,
  ) {
    this.mascotas.update((lista) => {
      const nueva = lista.map((m) =>
        m.id === mascotaId
          ? {
              ...m,

              vacunas: m.vacunas.filter((_, i) => i !== index),
            }
          : m,
      );

      this.guardar(nueva);

      return nueva;
    });
  }
  eliminarConsulta(
    mascotaId: number,

    index: number,
  ) {
    this.mascotas.update((lista) => {
      const nueva = lista.map((m) =>
        m.id === mascotaId
          ? {
              ...m,

              consultas: m.consultas.filter((_, i) => i !== index),
            }
          : m,
      );

      this.guardar(nueva);

      return nueva;
    });
  }
}
