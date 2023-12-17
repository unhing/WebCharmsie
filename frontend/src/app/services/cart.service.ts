import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cart';
  cart = new BehaviorSubject<Cart>({items: []})

  constructor(private _snackBar: MatSnackBar) {
    // Retrieve cart data from local storage on service initialization
    const storedCart = localStorage.getItem(this.cartKey);
    if (storedCart) {
      this.cart.next(JSON.parse(storedCart));
    }
  }

  private saveCartToLocalStorage(cart: Cart): void {
    // Save cart data to local storage
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);
    
    if(itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this.saveCartToLocalStorage({ items });
    this._snackBar.open('1 item added to cart.', 'Ok', { duration: 3000 })
  }

  getTotal(items: Array<CartItem>): number {
    return items.
      map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this.saveCartToLocalStorage({ items: [] });
    this._snackBar.open('Cart is cleared', 'Ok', { duration: 3000 });
  }

  removeFromCart(item: CartItem, update = true): Array<CartItem> {
    const filteredItems = this.cart.value.items.filter((_item) => _item.id !== item.id);

    if (update) {
      this.cart.next({ items: filteredItems });
      this._snackBar.open('1 item removed from cart', 'Ok', { duration: 3000 });
    }

    return filteredItems;
  }

  removeQuantity(item: CartItem): void {
    let itemForRemoval: CartItem | undefined;

    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;

        // if quantity = 0, remove item from cart
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }

      return _item;
    });

    if (itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, false);
    }

    this.cart.next({ items: filteredItems });
    this._snackBar.open('1 item removed from cart.', 'Ok', { duration: 3000 });
  }
}
