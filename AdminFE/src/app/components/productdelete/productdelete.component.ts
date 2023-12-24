import { Component, Inject, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductAdminService } from '../../services/product-admin.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-productdelete',
  templateUrl: './productdelete.component.html',
  styleUrls: ['./productdelete.component.css']
})
export class ProductdeleteComponent {
  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<ProductdeleteComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Product) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}
