import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',component:UserComponent},
  {path:'user',component:UserComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'products',component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
