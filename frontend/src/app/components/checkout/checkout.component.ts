import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { CheckoutService } from '../../services/checkout.service';
import { Order } from '../../models/order.model';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  errMessage: string = '';
  order = new Order();

  isSubmitting = false;

  constructor(private cartService: CartService, private router: Router, private checkOutService: CheckoutService, public snackBar: MatSnackBar) {}

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
    this.isSubmitting = true;

    this.order.orderDate = new Date().toLocaleString();
    this.order.totalValue = this.total;
    this.order.cartOrder = this.cart.items;
    console.log('Order: ', this.order)
    this.checkOutService.postOrder(this.order).subscribe({
      next:(data)=>{
        this.cartService.clearCart(); 
        this.router.navigate(['/']);
        this.snackBar.open('We have received your order!', 'Ok', { duration: 5000 });
      },
      error:(err)=>{this.errMessage=err},
      complete: () => {this.isSubmitting = false;},
    })
  }
}
