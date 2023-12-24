import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  types: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  selectedType: string = 'Item 1';
  quantity: number = 1;
  _id: string = '';
  errMessage: string = '';
  product: any;

  constructor(private activateRoute:ActivatedRoute,private _service:StoreService,private _cartService: CartService,private router:Router) {
    activateRoute.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')
        if(id!=null) {
          this._id = id;
        }
      }
    )
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  ngOnInit() {
    this.selectProduct(this._id);
  }

  selectProduct(_id:string) {
    this._service.getProductDetail(_id).subscribe({
      next:(data)=>{this.product=data},
      error:(err)=>{this.errMessage=err}
    })
  }

  onAddToCart(product: Product): void {
    this._cartService.addToCart({
      product: product.image,
      name: product.name,
      price: product.price,
      quantity: this.quantity,
      sku: product.sku
    });
  }
}
