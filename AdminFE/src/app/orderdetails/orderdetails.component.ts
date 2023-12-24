import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderAdminService } from '../services/order-admin.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderdeleteComponent } from '../orderdelete/orderdelete.component';
import { OrderupdateComponent } from '../orderupdate/orderupdate.component';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent {
  order:any;
  _id: string='';
  errMessage:string=''
  shippingPrice: number = 20000;

  constructor(private activateRoute:ActivatedRoute,private _service:OrderAdminService,private router:Router, public dialog: MatDialog) {
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
    this.selectOrder(this._id);
    
  }

  selectOrder(_id:string) {
    this._service.getOrderDetail(_id).subscribe({
      next:(data)=>{this.order=data},
      error:(err)=>{this.errMessage=err}
    })
  }

  openDialog(action: any,obj: { action: any; }) {
    obj.action = action;

    const dialogRef = this.dialog.open(OrderdeleteComponent, {
      width: '250px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.deleteRowData(result.data);
    });
  }

  deleteRowData(data_obj: { _id: string; }){
    this._service.deleteOrder(data_obj._id).subscribe({
      next:(data)=>{this.router.navigate(['/order'])},
      error:(err)=>{this.errMessage=err}
    })
  }

  getStatusStyles(status: string): any {
    switch (status) {
      case 'Pending':
        return { backgroundColor: 'gray', color: 'black' }; // Apply custom styles for 'Pending'
      case 'Packaging':
        return { backgroundColor: 'lightblue', color: 'black' }; // Apply custom styles for 'Packaging'
      case 'Delivering':
        return { backgroundColor: 'darkmagenta', color: 'white' }; // Apply custom styles for 'Delivering'
      case 'Done':
        return { backgroundColor: 'green', color: 'white' }; // Apply custom styles for 'Done'
      default:
        return { backgroundColor: 'gray', color: 'white' }; // Apply default styles for unknown status
    }
  }
}
