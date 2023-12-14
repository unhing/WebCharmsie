import { Component } from '@angular/core';
import { WorkshopForm } from '../models/workshop-form.model';
import { WorkshopService } from '../services/workshop.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent {
  workshopForm = new WorkshopForm;
  errMessage:string='';

  constructor(private workshopService: WorkshopService) {} 

  public setWorkshopForm(form: WorkshopForm) {
    this.workshopForm=form;
  }

  onFileSelected(event:any,workshopForm:WorkshopForm) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      workshopForm.billImage=reader.result!.toString()
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  onSubmit() {
    this.workshopService.postWorkshopForm(this.workshopForm).subscribe({
      next:(data)=>{this.workshopForm=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
