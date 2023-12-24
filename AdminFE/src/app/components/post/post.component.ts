import { Component } from '@angular/core';
import { BlogAdminService } from '../../services/blog-admin.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PostdeleteComponent } from '../postdelete/postdelete.component';
import { slideInOutAnimation } from '../../services/slide-in-out.animation';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  animations: [slideInOutAnimation],
})
export class PostComponent {
  _id: string=''
  blogs:any;
  errMessage:string=''
  constructor(public _service: BlogAdminService, private activateRoute: ActivatedRoute, public dialog: MatDialog){
    this._service.getBlog().subscribe({
      next:(data)=>{this.blogs=data},
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

    const dialogRef = this.dialog.open(PostdeleteComponent, {
      width: '250px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.deleteRowData(result.data);
      window.location.reload();
    });
  }

  deleteRowData(data_obj: { _id: string; }){
    this._service.deleteBlog(data_obj._id).subscribe({
      next:(data)=>{this.blogs=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
