import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CustomerAccountHomeComponent } from './customer-account-home/customer-account-home.component';




@NgModule({
  declarations: [
    CustomerAccountHomeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CustomerAccountHomeComponent
  ]
})
export class CustomerDashboardModule { }
