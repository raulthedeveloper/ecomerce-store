import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoriesComponent } from './categories/categories.component';
import { LayoutModule } from '../layout/layout.module';
import { StoreLocationsComponent } from './store-locations/store-locations.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    StoreComponent,
    CartComponent,
    OrderSummaryComponent,
    ProductDetailComponent,
    CategoriesComponent,
    StoreLocationsComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    FormsModule
  ]
})
export class StoreFrontModule { }
