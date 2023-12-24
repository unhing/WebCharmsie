import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WorkshopForm } from '../../models/workshop-form.model';

@Component({
  selector: 'app-workshopdelete',
  templateUrl: './workshopdelete.component.html',
  styleUrls: ['./workshopdelete.component.css']
})
export class WorkshopdeleteComponent {
  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<WorkshopdeleteComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: WorkshopForm) {
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
