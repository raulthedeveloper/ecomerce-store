import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavDropdownComponent } from './nav-dropdown/nav-dropdown.component';
import { StoreUiComponent } from './store-ui/store-ui.component';
import { CategoryUiComponent } from './category-ui/category-ui.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryRowComponent } from './category-row/category-row.component';
import { MiniCategorySelectorComponent } from './mini-category-selector/mini-category-selector.component';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [
    MainHeaderComponent,
    NotFoundComponent,
    NavBarComponent,
    NavDropdownComponent,
    StoreUiComponent,
    CategoryUiComponent,
    FooterComponent,
    CategoryCardComponent,
    CategoryRowComponent,
    MiniCategorySelectorComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MainHeaderComponent,
    NotFoundComponent,
    NavBarComponent,
    NavDropdownComponent,
    StoreUiComponent,
    CategoryUiComponent,
    FooterComponent,
    CategoryCardComponent,
    CategoryRowComponent,
    MiniCategorySelectorComponent,
  ]
})
export class LayoutModule { }
