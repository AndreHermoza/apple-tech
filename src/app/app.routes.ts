import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Products } from './components/products/products';
import { Contact } from './components/contact/contact';
import path from 'path';
import { Services } from './components/services/services';

export const routes: Routes = [
    {
     path: '',
     component: Main
    },
    {
    path: 'products',
    component: Products
    },
    {
    path: 'contact',
    component: Contact
    },
    {
    path: 'services',
    component: Services
    },
    {
    path: '**',
    redirectTo: ''
    }    
];
