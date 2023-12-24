import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductAdminService } from '../services/product-admin.service';
import { fadeInOutAnimation } from '../services/fade-in-out.animation';

@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.css'],
  animations: [fadeInOutAnimation],
})
export class ProductupdateComponent {
  product = new Product();
  errMessage:string=''
  _id: string='';
  constructor(private activateRoute:ActivatedRoute,private _service:ProductAdminService,private router:Router) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this._id = id;
        this.loadProductDetails(id);
      }
    });
  }

  loadProductDetails(id: string) {
    this._service.getProductDetail(id).subscribe({
      next: (data) => {this.product = data;},
      error: (err) => {this.errMessage = err;}
    });
  }

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
  
  putProduct(_id: string) {
    this._service.putProduct(_id, this.product).subscribe({
      next:(data)=>{this.product=data},
      error:(err)=>{this.errMessage=err}
    })
    alert("Update successfully!")
  } 
}
