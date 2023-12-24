import { Component } from '@angular/core';
import { ProductAdminService } from '../services/product-admin.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductdeleteComponent } from '../productdelete/productdelete.component';
import { slideInOutAnimation } from '../services/slide-in-out.animation';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [slideInOutAnimation],
})
export class ProductsComponent {
  _id: string=''
  products:any;
  errMessage:string=''
  constructor(public _service: ProductAdminService, private activateRoute: ActivatedRoute, public dialog: MatDialog){
    this._service.getProduct().subscribe({
      next:(data)=>{this.products=data},
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

    const dialogRef = this.dialog.open(ProductdeleteComponent, {
      width: '250px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.deleteRowData(result.data);
      window.location.reload();
    });
  }

  deleteRowData(data_obj: { _id: string; }){
    this._service.deleteProduct(data_obj._id).subscribe({
      next:(data)=>{this.products=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
