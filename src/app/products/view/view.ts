import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-view',
  imports: [],
  templateUrl: './view.html',
  styleUrl: './view.css',
})
export class View {
  route = inject(ActivatedRoute)
  productService = inject(ProductService);
  productData : any = null;
  ngOnInit(){
    this.route.paramMap.subscribe({
      next: (urlData: any) => {
        
        this.productService.getProductById(urlData.params.id).subscribe({
          next: (productData: any) => {
            this.productData = productData;
          }
        })

        
      }
    })
  }
}
