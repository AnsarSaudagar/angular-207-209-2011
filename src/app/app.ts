import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Products } from './products/products';
import { AddProduct } from './add-product/add-product';
import { filter, map, Observable, of } from 'rxjs';
import { AboutUs } from './about-us/about-us';
@Component({
  selector: 'app-root',
  imports: [ Navbar, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isOpen = false;

  constructor(){
    // const obs$ = new Observable((observer) => {
    //   observer.next([1, 2 ,3 , 4,]);
    //   observer.next(2);
    //   observer.next(3);
    //   observer.next(4);
    //   observer.next(5);
    //   observer.next(6);
    // });


    // const arr = [1, 2 , 3, 4, 6]

    // array functions
    // const newArr = arr
    //   .map((num) => num ** 2)
    //   .filter((num: any) => num %2 ===0);
    //   console.log(newArr);
      

    // operators
    // const obs$ = of(1, 2 , 3, 4, 6).pipe(
    //   map((num) => num ** 2),
    //   filter((num: any) => num %2 ===0)
    // );

    // // operators = data transform
    // console.log(obs$);

    // obs$.subscribe((num) => {
    //   console.log(num);
    // });
    
  }
}
