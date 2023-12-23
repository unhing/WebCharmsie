import { Component } from '@angular/core';
import { CustomerAdminService } from '../services/customer-admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CustomerdeleteComponent } from '../customerdelete/customerdelete.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  _id: string=''
  customers:any;
  errMessage:string=''
  constructor(public _service: CustomerAdminService, private activateRoute: ActivatedRoute, private router: Router, public dialog: MatDialog){
    this._service.getCustomer().subscribe({
      next:(data)=>{this.customers=data},
      error:(err)=>{this.errMessage=err}
    })

    this.activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this._id = id;
      }
    });
  }

  openDialog(action: any,obj: { action: any; }) {
    obj.action = action;

    const dialogRef = this.dialog.open(CustomerdeleteComponent, {
      width: '250px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.deleteRowData(result.data);
      window.location.reload();
    });
  }

  deleteRowData(data_obj: { _id: string; }){
    this._service.deleteCustomer(data_obj._id).subscribe({
      next:(data)=>{this.customers=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
