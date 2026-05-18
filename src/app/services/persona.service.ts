import { Injectable, signal } from '@angular/core';

export interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  duenio: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root',
})
export class PersonaService {

  mascotas = signal<Mascota[]>(this.cargar());

  private guardar(data: Mascota[]) {
    localStorage.setItem('mascotas', JSON.stringify(data));
  }

  private cargar(): Mascota[] {
    const data = localStorage.getItem('mascotas');
    return data ? JSON.parse(data) : [];
  }

  agregar(mascota: Omit<Mascota, 'id'>) {
    this.mascotas.update(lista => {

      const nueva = [
        ...lista,
        {
          ...mascota,
          id: Date.now()
        }
      ];

      this.guardar(nueva);

      return nueva;
    });
  }

  eliminar(id: number) {
    this.mascotas.update(lista => {

      const nueva = lista.filter(m => m.id !== id);

      this.guardar(nueva);

      return nueva;
    });
  }

  editar(id: number, datos: Partial<Mascota>) {

    this.mascotas.update(lista => {

      const nueva = lista.map(m =>
        m.id === id
          ? { ...m, ...datos }
          : m
      );

      this.guardar(nueva);

      return nueva;
    });
  }
}