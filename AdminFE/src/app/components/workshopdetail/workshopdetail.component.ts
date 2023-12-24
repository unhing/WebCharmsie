import { Component } from '@angular/core';
import { fadeInOutAnimation } from '../../services/fade-in-out.animation';
import { WorkshopForm } from '../../models/workshop-form.model';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkshopAdminService } from '../../services/workshop-admin.service';
import { MatDialog } from '@angular/material/dialog';
import { WorkshopdeleteComponent } from '../workshopdelete/workshopdelete.component';

@Component({
  selector: 'app-workshopdetail',
  templateUrl: './workshopdetail.component.html',
  styleUrls: ['./workshopdetail.component.css'],
  animations: [fadeInOutAnimation]
})
export class WorkshopdetailComponent {
  workshopForm: any = new WorkshopForm();
  errMessage: string = '';
  _id: string = '';

  constructor(
    private activateRoute: ActivatedRoute,
    private _service: WorkshopAdminService,
    private router: Router,
    public dialog: MatDialog,
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

  openDialog(action: any,obj: { action: any; }) {
    obj.action = action;

    const dialogRef = this.dialog.open(WorkshopdeleteComponent, {
      width: '250px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.deleteRowData(result.data);
    });
  }

  deleteRowData(data_obj: { _id: string; }){
    this._service.deleteWorkshopForm(data_obj._id).subscribe({
      next:(data)=>{this.router.navigate(['/workshop'])},
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
