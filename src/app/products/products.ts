import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  @Input() products  : any = []
  
}
