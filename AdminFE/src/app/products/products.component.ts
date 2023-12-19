import { Component } from '@angular/core';
import { ProductAdminService } from '../services/product-admin.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  _id: string=''
  products:any;
  errMessage:string=''
  constructor(public _service: ProductAdminService){
    this._service.getProduct().subscribe({
      next:(data)=>{this.products=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
