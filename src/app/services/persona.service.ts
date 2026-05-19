import { Injectable, signal } from '@angular/core';

export interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  
  duenio: string;
  imagen: string;

  vacunas: {
  nombre: string;
  fecha: string;
}[];

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

  agregarVacuna(

  id: number,

  vacuna: {
    nombre: string;
    fecha: string;
  }

) {

  this.mascotas.update(lista => {

    const nueva = lista.map(m =>

      m.id === id

        ? {
            ...m,
            vacunas: [
              ...(m.vacunas || []),
              vacuna
            ]
          }

        : m

    );

    this.guardar(nueva);

    return nueva;

  });

}
}