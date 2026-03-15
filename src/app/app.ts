import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Products } from './products/products';
import { AddProduct } from './add-product/add-product';
@Component({
  selector: 'app-root',
  imports: [ Navbar, Products, AddProduct],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isOpen = false;
}
