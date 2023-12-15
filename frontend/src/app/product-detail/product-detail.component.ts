import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  thumbnailImages: string[] = ['/assets/images/logo.png', '/assets/images/logo.png', '/assets/images/logo.png', '/assets/images/logo.png'];
  types: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  selectedType: string = 'Item 1';
  quantity: number = 1;

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }
}
