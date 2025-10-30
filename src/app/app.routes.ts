import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { Contanct } from './page/contanct/contanct';
import { Products } from './page/products/products';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'about', component:About},
    {path:'contanct', component:Contanct},
    {path:'products', component:Products},
    {path:'**', redirectTo:''}
];
