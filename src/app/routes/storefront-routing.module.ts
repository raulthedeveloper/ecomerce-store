import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from '../admin/locations/locations.component';
import { NotFoundComponent } from '../layout/not-found/not-found.component';
import { CartComponent } from '../store-front/cart/cart.component';
import { HomeComponent } from '../store-front/home/home.component';
import { OrderSummaryComponent } from '../store-front/order-summary/order-summary.component';
import { StoreLocationsComponent } from '../store-front/store-locations/store-locations.component';
import { StoreComponent } from '../store-front/store/store.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"store",component:StoreComponent},
  {path:"locations",component:StoreLocationsComponent},
  {path:"admin-location",component:LocationsComponent},
  {path:"cart",component:CartComponent},
  {path:"order-summary", component:OrderSummaryComponent},
  {path:"**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StoreFrontRoutingModule { }
