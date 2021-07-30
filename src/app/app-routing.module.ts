import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
//import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path: '', redirectTo:'/products', pathMatch: 'full'},
  {path: 'products', component: ProductComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  //{path: 'cart', component: ProductComponent},
  //{path: 'products/:id', component: CartComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }