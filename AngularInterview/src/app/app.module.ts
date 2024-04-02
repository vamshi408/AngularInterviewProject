import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './user/userReducer';
import { productReducer } from './products/productsReducer';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UserComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Store Configuration
    StoreModule.forRoot({user:userReducer,product:productReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
