import { Component } from '@angular/core';
import { WorkshopForm } from '../../models/workshop-form.model';
import { WorkshopService } from '../../services/workshop.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { slideInOutAnimation } from 'src/app/models/slide-in-out.animation';
@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css'],
  animations: [slideInOutAnimation]
})
export class WorkshopComponent {
  workshopForm = new WorkshopForm;
  errMessage:string='';

  constructor(private workshopService: WorkshopService,  private snackBar: MatSnackBar) { } 

  public setWorkshopForm(form: WorkshopForm) {
    this.workshopForm=form;
  }

  minDate(): string {
    // Get today's date
    const today = new Date();

    // Add 1 day
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);

    // Format the date in the format yyyy-mm-dd
    const formattedNextDay = nextDay.toISOString().split('T')[0];
    return formattedNextDay;
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
      next:(data)=>{this.workshopForm = new WorkshopForm(), this.snackBar.open('Form sent', 'Ok', { duration: 3000 });},
      error:(err)=>{this.errMessage=err}
    })
  }
}
