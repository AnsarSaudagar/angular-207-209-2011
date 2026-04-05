import { Routes } from '@angular/router';
import { Products } from './products/products';
import { AboutUs } from './about-us/about-us';
import { AddProduct } from './add-product/add-product';
import { NotFound } from './not-found/not-found';
import { View } from './products/view/view';
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
        path: 'edit-product/:id', component: AddProduct 
    },
    {
        path: 'view-product/:id', component: View
    },
    {
        path:'**', component: NotFound  
    }
    
];


 