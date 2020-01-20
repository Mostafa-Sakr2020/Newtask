import { AdminproductComponent } from './admin/adminproduct/adminproduct.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MYOrdersComponent } from './my-orders/my-orders.component';
import { AdminorderComponent } from './admin/adminorder/adminorder.component';


const routes: Routes = [
  {path: 'Products'       , component: ProductsComponent},
  {path: 'orders'         , component: MYOrdersComponent},
  {path: 'admin/product'  , component: AdminproductComponent},
  {path: 'admin/order'    , component: AdminorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
