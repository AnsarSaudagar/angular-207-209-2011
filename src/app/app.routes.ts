import { Routes } from '@angular/router';
import { Products } from './products/products';
import { AboutUs } from './about-us/about-us';

export const routes: Routes = [
    {
        path: '', component: Products 
    },
    {
        path: 'about-us', component: AboutUs //about-us
    },
];


 