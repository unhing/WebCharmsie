import { Component } from '@angular/core';
import { User } from '../models/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerAdminService } from '../services/customer-admin.service';
import { fadeInOutAnimation } from '../services/fade-in-out.animation';

@Component({
  selector: 'app-customerupdate',
  templateUrl: './customerupdate.component.html',
  styleUrls: ['./customerupdate.component.css'],
  animations: [fadeInOutAnimation],
})
export class CustomerupdateComponent {
  customer = new User();
  errMessage:string=''
  _id: string='';
  constructor(private activateRoute:ActivatedRoute,private _service:CustomerAdminService,private router:Router) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this._id = id;
        this.loadCustomerDetail(id);
      }
    });
  }

  loadCustomerDetail(id: string) {
    this._service.getCustomerDetail(id).subscribe({
      next: (data) => {this.customer = data;},
      error: (err) => {this.errMessage = err;}
    });
  }
  
  putCustomer(_id: string) {
    this._service.putCustomer(_id, this.customer).subscribe({
      next:(data)=>{this.customer=data},
      error:(err)=>{this.errMessage=err}
    })
    alert("Update successfully!")
  } 
}
