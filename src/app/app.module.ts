import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './routes/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { StoreFrontRoutingModule } from './routes/storefront-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { StoreFrontModule } from './store-front/store-front.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    StoreFrontRoutingModule,
    LayoutModule,
    AdminModule,
    StoreFrontModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
