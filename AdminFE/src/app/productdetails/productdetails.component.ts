import { Component } from '@angular/core';
import { ProductAdminService } from '../services/product-admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  product:any;
  _id: string='';
  errMessage:string=''
  sharedContent: string = '';

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

  ngOnInit() {
    this.selectProduct(this._id);
  }

  selectProduct(_id:string) {
    this._service.getProductDetail(_id).subscribe({
      next:(data)=>{this.product=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
