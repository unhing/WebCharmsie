import { Component } from '@angular/core';
import { Order } from '../../models/order.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderAdminService } from '../../services/order-admin.service';

@Component({
  selector: 'app-orderupdate',
  templateUrl: './orderupdate.component.html',
  styleUrls: ['./orderupdate.component.css']
})
export class OrderupdateComponent {
  order = new Order();
  errMessage: string = '';
  _id: string = '';

  constructor(
    private activateRoute: ActivatedRoute,
    private _service: OrderAdminService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this._id = id;
        this.loadOrderDetails(this._id);
      }
    });
  }

  loadOrderDetails(id: string) {
    this._service.getOrderDetail(id).subscribe({
      next: (data) => {
        this.order = data;
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }

  patchOrder() {
    const updatedFields = { status: this.order.status }; // Update with other fields as needed

    this._service.patchOrder(this._id, updatedFields).subscribe({
      next: (data) => {
        this.order = { ...this.order, ...data }; // Update the local order with the patched data if needed
        alert('Update successfully!');
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }
}
