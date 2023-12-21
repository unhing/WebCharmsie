import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from './models/cart.model';
import { CartService } from './services/cart.service';
import { AuthService } from './services/auth.service';
import { User } from './models/user.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  isLoggedIn: boolean = false;

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

  constructor(private cartService: CartService, private authService: AuthService, private router: Router, private matSnackBar: MatSnackBar) {
    this.authService.isLoggedIn.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

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

  logout() {
    this.authService.logout();
    this.matSnackBar.open('Log out successful', 'Ok', { duration: 3000 })
    this.router.navigate(['/login']);
}
}
