import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { LocationsComponent } from './locations/locations.component';
import { SalesComponent } from './sales/sales.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { TablesModule } from '../tables/tables.module';
import { ModalsModule } from '../modals/modals.module';




@NgModule({
  declarations: [
    CustomerComponent,
    LocationsComponent,
    SalesComponent,
    CategoriesComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    TablesModule,
    ModalsModule
  ]
})
export class AdminModule { }
