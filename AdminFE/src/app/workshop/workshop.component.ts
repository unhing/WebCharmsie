import { Component } from '@angular/core';
import { WorkshopAdminService } from '../services/workshop-admin.service';
import { slideInOutAnimation } from '../services/slide-in-out.animation';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css'],
  animations: [slideInOutAnimation],
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

  getStatusStyles(status: string): any {
    switch (status) {
      case 'unconfirmed':
        return { backgroundColor: 'gray', color: 'black' };
      case 'confirmed':
        return { backgroundColor: 'green', color: 'white' }; 
      default:
        return { backgroundColor: 'gray', color: 'black' };
    }
  }
}
