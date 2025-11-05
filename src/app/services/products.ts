import { Injectable } from '@angular/core';

export interface Product1 {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class Productos {

  private productos: Product1[] = [
    {
      id: 1,
      nombre: 'Clase de Aritmetica',
      descripcion: 'La Aritmética es la base de todo. Mejora tus habilidades de cálculo, toma mejores decisiones financieras y supera cualquier examen.',
      precio: 45000,
      imagen: 'assets/img/A1.jpg',
    },
    {
      id: 2,
      nombre: 'Clase de Algebra',
      descripcion: 'El Álgebra se trata de resolver lo desconocido (x), por lo que un buen texto promocional debe enfocarse en cómo esta materia desbloquea el pensamiento lógico y las puertas a carreras avanzadas.',
      precio: 65000,
      imagen: 'assets/img/A2.jpg',
    },
    {
      id: 3,
      nombre: 'Clase de Geometría',
      descripcion: 'El Álgebra se trata de resolver lo desconocido (x), por lo que un buen texto promocional debe enfocarse en cómo esta materia desbloquea el pensamiento lógico y las puertas a carreras avanzadas.',
      precio: 40000,
      imagen: 'assets/img/A3.jpeg',
    },
    {
      id: 1,
      nombre: 'Clase de Estadistica',
      descripcion: 'La Estadística es tu superpoder para entender la información, detectar patrones y evaluar riesgos. Es la habilidad más demandada en negocios, investigación y ciencia de datos.',
      precio: 65000,
      imagen: 'assets/img/A4.jpeg',
    }
  ]

  constructor() { }
  getProductos(): Product1[] {
    return this.productos;
  }

}
