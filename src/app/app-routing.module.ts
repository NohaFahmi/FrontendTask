import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('@modules/landing-home/landing-home.module').then(m => m.LandingHomeModule)
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () => import('@modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'product/:id',
    pathMatch: 'full',
    loadChildren: () => import('@modules/product-details/product-details.module').then(m => m.ProductDetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
