import { Routes } from '@angular/router';
import { Products } from './products/products';
import { AboutUs } from './about-us/about-us';
import { AddProduct } from './add-product/add-product';
import { NotFound } from './not-found/not-found';
//adslkjfksajdf
export const routes: Routes = [
    {
        path: '', component: Products ,
    
    },
    {
        path: 'about-us', component: AboutUs 
    },
    {
        path: 'add-product', component: AddProduct 
    },
    {
        path:'**', component: NotFound  
    }
];


 