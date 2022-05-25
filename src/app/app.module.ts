import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './routes/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { CustomerDashboardRoutingModule } from './routes/customer-dashboard-routing.module';
import { StoreFrontRoutingModule } from './routes/storefront-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { StoreFrontModule } from './store-front/store-front.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    StoreFrontRoutingModule,
    CustomerDashboardRoutingModule,
    LayoutModule,
    AdminModule,
    StoreFrontModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
