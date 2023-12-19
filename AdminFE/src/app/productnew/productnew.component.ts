import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductAdminService } from '../services/product-admin.service';

@Component({
  selector: 'app-productnew',
  templateUrl: './productnew.component.html',
  styleUrls: ['./productnew.component.css']
})
export class ProductnewComponent {
  product = new Product;
  errMessage:string='';

  constructor(private productService: ProductAdminService) { } 

  onFileSelected(event:any,product:Product) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      product.image=reader.result!.toString()
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  onSubmit() {
    this.productService.postProduct(this.product).subscribe({
      next:(data)=>{this.product = new Product()},
      error:(err)=>{this.errMessage=err}
    })
  } 
}
