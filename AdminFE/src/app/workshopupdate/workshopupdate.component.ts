import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkshopAdminService } from '../services/workshop-admin.service';
import { WorkshopForm } from '../models/workshop-form.model';

@Component({
  selector: 'app-workshopupdate',
  templateUrl: './workshopupdate.component.html',
  styleUrls: ['./workshopupdate.component.css']
})
export class WorkshopupdateComponent {
  workshopForm = new WorkshopForm();
  errMessage: string = '';
  _id: string = '';

  constructor(
    private activateRoute: ActivatedRoute,
    private _service: WorkshopAdminService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this._id = id;
        this.loadOrderDetails(this._id);
      }
    });
  }

  loadOrderDetails(id: string) {
    this._service.getWorkshopDetail(id).subscribe({
      next: (data) => {
        this.workshopForm = data;
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }

  patchWorkshopForm() {
    const updatedFields = { status: this.workshopForm.status }; // Update with other fields as needed

    this._service.patchWorkshopForm(this._id, updatedFields).subscribe({
      next: (data) => {
        this.workshopForm = { ...this.workshopForm, ...data }; // Update the local order with the patched data if needed
        alert('Update successfully!');
        console.log("status:", this.workshopForm.status)
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }
}
