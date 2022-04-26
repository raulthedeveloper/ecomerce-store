import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './admin/categories/categories.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { LocationsComponent } from './admin/locations/locations.component';
import { ProductsComponent } from './admin/products/products.component';
import { SalesComponent } from './admin/sales/sales.component';


const routes: Routes = [
  {path:"admin-products",component:ProductsComponent},
  {path:"admin-categories",component:CategoriesComponent},
  {path:"admin-sales",component:SalesComponent},
  {path:"admin-customers",component:CustomerComponent},
  {path:"admin-locations",component:LocationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
