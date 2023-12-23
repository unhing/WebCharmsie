import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContactForm } from '../models/contact-form.model';

@Component({
  selector: 'app-contactformdelete',
  templateUrl: './contactformdelete.component.html',
  styleUrls: ['./contactformdelete.component.css']
})
export class ContactformdeleteComponent {
  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<ContactformdeleteComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ContactForm) {
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
