import { Component } from '@angular/core';
import { CartServiceService } from './services/cart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-store';

  constructor(private cartService:CartServiceService){}

  ngOnInit(){

    this.cartService.loadCartData();
  }
}
