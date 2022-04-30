import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from '../admin/locations/locations.component';
import { NotFoundComponent } from '../layout/not-found/not-found.component';
import { CartComponent } from '../store-front/cart/cart.component';
import { HomeComponent } from '../store-front/home/home.component';
import { OrderSummaryComponent } from '../store-front/order-summary/order-summary.component';
import { ProductDetailComponent } from '../store-front/product-detail/product-detail.component';
import { StoreCategoryComponent } from '../store-front/store-category/store-category.component';
import { StoreLocationsComponent } from '../store-front/store-locations/store-locations.component';
import { StoreComponent } from '../store-front/store/store.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"store",component:StoreComponent},
  {path:"store/:category",component:StoreCategoryComponent},
  {path:"store/:category/:id",component:ProductDetailComponent},
  {path:"locations",component:StoreLocationsComponent},
  {path:"admin-location",component:LocationsComponent},
  {path:"cart",component:CartComponent},
  {path:"order-summary/:id", component:OrderSummaryComponent},
  {path:"**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StoreFrontRoutingModule { }
