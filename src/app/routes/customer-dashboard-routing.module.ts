import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAccountHomeComponent } from '../customer-dashboard/customer-account-home/customer-account-home.component';

const routes: Routes = [
  {path:"admin-home/:id",component:CustomerAccountHomeComponent},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDashboardRoutingModule { }
