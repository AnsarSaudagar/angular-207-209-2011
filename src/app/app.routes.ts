import { Routes } from '@angular/router';
import { NotFound } from './not-found/not-found';

//adslkjfksajdf
export const routes: Routes = [
    {
        path: '', 
        loadComponent: () => import('./products/products').then(m => m.Products) ,
    
    },
    {
        path: 'about-us', 
        loadComponent: () => import('./about-us/about-us').then(m => m.AboutUs)
    },
    {
        path: 'add-product', 
        loadComponent: () => import('./add-product/add-product').then(m => m.AddProduct) 
    },
    {
        path: 'edit-product/:id', 
        loadComponent: () => import('./add-product/add-product').then(m => m.AddProduct) 
    },
    {
        path: 'view-product/:id', 
        loadComponent: () => import('./products/view/view').then(m => m.View)
    },
    {
        path: 'profile',
        loadComponent: () => import('./profile/profile').then(m => m.Profile),
        children: [
            {
                path: '',
                redirectTo: 'personal',
                pathMatch: 'full'
            },
            {
                path: 'personal',
                loadComponent: () => import('./profile/personal/personal').then(m => m.Personal)
            },
            {
                path: 'address',
                loadComponent: () => import('./profile/address/address').then(m => m.Address)
            },
            {
                path: 'contact',
                loadComponent: () => import('./profile/contact/contact').then(m => m.Contact)
            }
        ]
    },
    {
        path:'**', component: NotFound   // wildcard
    }

    
];


 