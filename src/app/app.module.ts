import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminproductComponent } from './admin/adminproduct/adminproduct.component';
import { AdminorderComponent } from './admin/adminorder/adminorder.component';
import { ProductsComponent } from './products/products.component';
import { MYOrdersComponent } from './my-orders/my-orders.component';
import { StartComponent } from './start/start.component';
import { NavparComponent } from './navpar/navpar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminproductComponent,
    AdminorderComponent,
    ProductsComponent,
    MYOrdersComponent,
    StartComponent,
    NavparComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [StartComponent]
})
export class AppModule { }
