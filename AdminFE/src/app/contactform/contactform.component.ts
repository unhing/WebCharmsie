import { Component } from '@angular/core';
import { ContactAdminService } from '../services/contact-admin.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {
  contactForms:any;
  errMessage:string=''
  constructor(public _service: ContactAdminService){
    this._service.getContactForm().subscribe({
      next:(data)=>{this.contactForms=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
