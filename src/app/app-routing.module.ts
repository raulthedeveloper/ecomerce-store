import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './admin/locations/locations.component';
import { CartComponent } from './store-front/cart/cart.component';
import { HomeComponent } from './store-front/home/home.component';
import { StoreLocationsComponent } from './store-front/store-locations/store-locations.component';
import { StoreComponent } from './store-front/store/store.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"store",component:StoreComponent},
  {path:"locations",component:StoreLocationsComponent},
  {path:"admin_location",component:LocationsComponent},
  {path:"cart",component:CartComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
