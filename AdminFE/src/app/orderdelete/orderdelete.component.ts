import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-orderdelete',
  templateUrl: './orderdelete.component.html',
  styleUrls: ['./orderdelete.component.css']
})
export class OrderdeleteComponent {
  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<OrderdeleteComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Order) {
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
