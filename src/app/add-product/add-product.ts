import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {

  router = inject(Router);
  route =inject(ActivatedRoute);
  product = {
    name: '',
    price: '',
    description: '',
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
  };
  
  productService = inject(ProductService);

  ngOnInit(){
    this.route.paramMap.subscribe({
      next: (urlData: any) => {
        
        // isEdit = false -> add product
        if(urlData.params.id){
          this.isEdit = true; // -> edit product
          this.productService.getProductById(urlData.params.id).subscribe({
            next: (productData: any) => {
              this.product = productData;
            }
          })
        }
      }
    })
  }
  
  isEdit : any = false;

  onSubmit(form : any){ 

    if(form.valid){
      if(this.isEdit){
        this.productService.updateProduct(this.product).subscribe({
          complete: () => {
            this.productService.productSubject.next(true);
            this.router.navigate(['/']);
            
          }
        });
      } else {
        this.productService.addProduct(this.product).subscribe({
          complete: () => {
            this.productService.productSubject.next(true);
            this.router.navigate(['/']);
            
          }
        });
      }

      this.product = {
        name: '',
        price: '',
        description: '',
        img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
      };

    } else {
      alert("Form is invalid, please fill all the required inputs")
    }
        
    
    
  }
}
