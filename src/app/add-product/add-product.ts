import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {

  product = {
    name: '',
    price: '',
    description: '',
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
  };
  
  productService = inject(ProductService);

  onSubmit(){
    this.productService.products.push(this.product);    
    this.product = {
      name: '',
      price: '',
      description: '',
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
    };
  }
}
