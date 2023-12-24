import { Component } from '@angular/core';
import { slideInOutAnimation } from '../services/slide-in-out.animation';
import { OrderAdminService } from '../services/order-admin.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OrderdeleteComponent } from '../orderdelete/orderdelete.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  animations: [slideInOutAnimation],
})
export class OrderComponent {
  _id: string=''
  orders:any;
  errMessage:string=''
  constructor(public _service: OrderAdminService, private activateRoute: ActivatedRoute, public dialog: MatDialog){
    this._service.getOrder().subscribe({
      next:(data)=>{this.orders=data},
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
