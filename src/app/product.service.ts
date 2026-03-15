import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products : any = [
    {
      name: 'Smart Watch',
      description: 'Premium fitness smartwatch',
      price: 3999,
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    },
    {
      name: 'Headphones',
      description: 'Noise cancelling audio',
      price: 7499,
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    },
    {
      name: 'Laptop',
      description: 'Ultra performance laptop',
      price: 89999,
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    },
    {
      name: 'Smartphone',
      description: 'Latest flagship device',
      price: 49999,
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
    },


  ]; 
}
