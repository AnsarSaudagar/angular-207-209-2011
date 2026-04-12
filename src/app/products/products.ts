import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productService = inject(ProductService);

  @Input() test : any = null;

  products : any = [];
  
  constructor(){
    // console.log(this.test);
    this.productService.productSubject.subscribe({
      next: (data) => {
        this.getAllProducts();
      }
    })
  }

  ngOnInit(){
      this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onDeleteProduct(productId: string){
    this.productService.deleteProduct(productId).subscribe({
       complete: () => {
        this.getAllProducts();
       }
    });
  }

  router = inject(Router);

  onClickView(productId: any){
    this.router.navigate([`view-product/${productId}`], {
      queryParams: {
        unavailable: productId === '2' ? true : false,
      }
    } );
  }

  onClickUpdate(productId : any){
    this.router.navigate([`edit-product/${productId}`]);
  }

  ngDoCheck(){
    
  }

  ngOnChanges(){

  }

  ngOnDestroy(){

  }
  
  
}
