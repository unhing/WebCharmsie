import { Component } from '@angular/core';
import { WorkshopAdminService } from '../services/workshop-admin.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent {
  workshopForms:any;
  errMessage:string=''
  constructor(public _service: WorkshopAdminService){
    this._service.getWorkshopForm().subscribe({
      next:(data)=>{this.workshopForms=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
