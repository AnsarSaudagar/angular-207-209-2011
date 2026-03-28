import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productService = inject(ProductService);

  @Input() test : any = null;

  constructor(){
    // console.log(this.test);
  }
  products : any = [];
  
  ngOnInit(){
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onDeleteProduct(productId: string){
    this.productService.deleteProduct(productId).subscribe();
  }

  ngDoCheck(){
    
  }

  ngOnChanges(){

  }

  ngOnDestroy(){

  }
  
  
}
