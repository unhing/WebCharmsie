import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {
  blog:any;
  blogs: any;
  _id: string='';
  errMessage:string=''
  sharedContent: string = '';

  constructor(private activateRoute:ActivatedRoute,private _service:BlogService,private router:Router, public sanitizer: DomSanitizer) {
    activateRoute.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')
        if(id!=null) {
          this._id = id;
        }
      }
    )
  }

  ngOnInit() {
    this.selectPost(this._id);
    this._service.getBlog().subscribe({
      next:(data)=>{this.blogs=data},
      error:(err)=>{this.errMessage=err}
    })
  }

  selectPost(_id:string) {
    this._service.getBlogDetail(_id).subscribe({
      next:(data)=>{this.blog=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
