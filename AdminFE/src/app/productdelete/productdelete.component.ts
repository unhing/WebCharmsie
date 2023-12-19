import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductAdminService } from '../services/product-admin.service';

@Component({
  selector: 'app-productdelete',
  templateUrl: './productdelete.component.html',
  styleUrls: ['./productdelete.component.css']
})
export class ProductdeleteComponent {
  _id: string='';
  products:any;
  product: any;
  errMessage:string=''
  
  constructor(private activateRoute:ActivatedRoute,private _service:ProductAdminService,private router:Router) {
    activateRoute.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')
        if(id!=null) {
          this._id = id;
        }
      }
    )
  }

  deleteProduct(_id:any) {
    this._service.deleteProduct(_id).subscribe({
      next:(data)=>{this.products=data},
      error:(err)=>{this.errMessage=err}
    })
    this.navigateToProductPage();
  }

  navigateToProductPage() {
    this.router.navigate(['/product']);
  }
}