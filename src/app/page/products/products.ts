import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product1, Productos } from '../../services/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})


export class Products {
  productos: Product1[] = [];

  constructor(private productServices: Productos) {
    this.productos = this.productServices.getProductos();
  }
}
