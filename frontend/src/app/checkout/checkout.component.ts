import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cart: any;
  subtotal: number = 0;
  shippingCost: number = 20000;
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;

      // Log the cart to the console
      console.log('Cart:', this.cart);

      // Calculate subtotal, shipping cost, and total
      this.subtotal = this.cartService.getTotal(this.cart.items);
      this.shippingCost = 20000; // Set your shipping cost or calculate it based on your business logic
      this.total = this.subtotal + this.shippingCost;
    });
  }

  onCancel(): void {
    this.router.navigate(['/cart']);
  }

  onSubmit() {
    
  }
}
