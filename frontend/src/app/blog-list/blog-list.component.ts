import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  _id: string=''
  blogs:any;
  errMessage:string=''
  constructor(public _service: BlogService, public sanitizer: DomSanitizer){
    this._service.getBlog().subscribe({
      next:(data)=>{this.blogs=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
