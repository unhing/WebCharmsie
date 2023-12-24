import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerAdminService } from '../services/customer-admin.service';
import { slideInOutAnimation } from '../services/slide-in-out.animation';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css'],
  animations: [slideInOutAnimation],
})
export class CustomerdetailComponent {
  customer:any;
  _id: string='';
  errMessage:string=''
  sharedContent: string = '';

  constructor(private activateRoute:ActivatedRoute,private _service:CustomerAdminService,private router:Router) {
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
    this.selectCustomer(this._id);
  }

  selectCustomer(_id:string) {
    this._service.getCustomerDetail(_id).subscribe({
      next:(data)=>{this.customer=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
