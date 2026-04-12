import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {

  productFrom  = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl(''),
    description: new FormControl(''),
    // number: new FormControl(0)
  });

  router = inject(Router);
  route =inject(ActivatedRoute);
  
  productService = inject(ProductService);

  ngOnInit(){
    this.route.paramMap.subscribe({
      next: (urlData: any) => {
        
        // isEdit = false -> add product
        if(urlData.params.id){
          this.isEdit = true; // -> edit product
          this.productService.getProductById(urlData.params.id).subscribe({
            next: (productData: any) => {
              // this.product = productData;
            }
          })
        }
      }
    })
  }
  
  isEdit : any = false;

  onSubmit(){ 

    // if(form.valid){
      if(this.isEdit){
        // this.productService.updateProduct(this.product).subscribe({
        //   complete: () => {
        //     this.productService.productSubject.next(true);
        //     this.router.navigate(['/']);
            
        //   }
        // });
      } else {
        // this.productService.addProduct(this.product).subscribe({
        //   complete: () => {
        //     this.productService.productSubject.next(true);
        //     this.router.navigate(['/']);
            
        //   }
        // });
      }

      // this.product = {
      //   name: '',
      //   price: '',
      //   description: '',
      //   img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
      // };

    // } else {
      // alert("Form is invalid, please fill all the required inputs")
    // }
        
    
    
  }
}
