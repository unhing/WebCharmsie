import { Component } from '@angular/core';
import { BlogPost } from '../models/blog.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogAdminService } from '../services/blog-admin.service';

@Component({
  selector: 'app-postupdate',
  templateUrl: './postupdate.component.html',
  styleUrls: ['./postupdate.component.css']
})
export class PostupdateComponent {
  blog = new BlogPost();
  errMessage:string=''
  _id: string='';
  constructor(private activateRoute:ActivatedRoute,private _service:BlogAdminService,private router:Router) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this._id = id;
        this.loadBlogDetail(id);
      }
    });
  }

  loadBlogDetail(id: string) {
    this._service.getBlogDetail(id).subscribe({
      next: (data) => {this.blog = data;},
      error: (err) => {this.errMessage = err;}
    });
  }

  onFileSelected(event:any,blog:BlogPost) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      blog.coverImage=reader.result!.toString()
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  
  putBlog(_id: string) {
    this.blog.date = new Date().toLocaleDateString();
    this._service.putBlog(_id, this.blog).subscribe({
      next:(data)=>{this.blog=data},
      error:(err)=>{this.errMessage=err}
    })
    alert("Update successfully!")
  } 
}
