import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogAdminService } from '../services/blog-admin.service';

@Component({
  selector: 'app-postdelete',
  templateUrl: './postdelete.component.html',
  styleUrls: ['./postdelete.component.css']
})
export class PostdeleteComponent {
  _id: string='';
  blogs:any;
  errMessage:string=''
  
  constructor(private activateRoute:ActivatedRoute,private _service:BlogAdminService,private router:Router) {
    activateRoute.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')
        if(id!=null) {
          this._id = id;
        }
      }
    )
  }

  deleteBlog(_id:any) {
    this._service.deleteBlog(_id).subscribe({
      next:(data)=>{this.blogs=data},
      error:(err)=>{this.errMessage=err}
    })
    this.navigateToBlogPage();
  }

  navigateToBlogPage() {
    this.router.navigate(['/post']);
  }
}
