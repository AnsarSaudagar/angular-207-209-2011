import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {

  router = inject(Router);

  product = {
    name: '',
    price: '',
    description: '',
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
  };
  
  productService = inject(ProductService);

  onSubmit(){
    // this.productService.products.push(this.product);    
    this.productService.addProduct(this.product).subscribe({
      complete: () => {
        this.productService.productSubject.next(true);
        this.router.navigate(['/']);
        
      }
    });
    this.product = {
      name: '',
      price: '',
      description: '',
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
    };
  }
}
