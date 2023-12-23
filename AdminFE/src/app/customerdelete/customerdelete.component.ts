import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/customer.model';

@Component({
  selector: 'app-customerdelete',
  templateUrl: './customerdelete.component.html',
  styleUrls: ['./customerdelete.component.css']
})
export class CustomerdeleteComponent {
  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<CustomerdeleteComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: User) {
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
