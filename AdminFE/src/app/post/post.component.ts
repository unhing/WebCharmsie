import { Component } from '@angular/core';
import { BlogAdminService } from '../services/blog-admin.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  _id: string=''
  blogs:any;
  errMessage:string=''
  constructor(public _service: BlogAdminService){
    this._service.getBlog().subscribe({
      next:(data)=>{this.blogs=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
