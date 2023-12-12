import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input() 
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    })
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  };

  onClearCart() {
    this.cartService.clearCart();
  }
}
