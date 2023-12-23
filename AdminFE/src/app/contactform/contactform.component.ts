import { Component } from '@angular/core';
import { ContactAdminService } from '../services/contact-admin.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ContactformdeleteComponent } from '../contactformdelete/contactformdelete.component';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {
  _id: string='';
  contactForms:any;
  errMessage:string=''
  constructor(public _service: ContactAdminService, private activateRoute: ActivatedRoute, private dialog: MatDialog){
    this._service.getContactForm().subscribe({
      next:(data)=>{this.contactForms=data},
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

    const dialogRef = this.dialog.open(ContactformdeleteComponent, {
      width: '250px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.deleteRowData(result.data);
      window.location.reload();
    });
  }

  deleteRowData(data_obj: { _id: string; }){
    this._service.deleteContactForm(data_obj._id).subscribe({
      next:(data)=>{this.contactForms=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
