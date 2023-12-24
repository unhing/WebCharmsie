import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogAdminService } from '../services/blog-admin.service';
import { DomSanitizer } from '@angular/platform-browser';
import { slideInOutAnimation } from '../services/slide-in-out.animation';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css'],
  animations: [slideInOutAnimation],
})
export class PostdetailComponent {
  blog:any;
  _id: string='';
  errMessage:string=''
  sharedContent: string = '';

  constructor(private activateRoute:ActivatedRoute,private _service:BlogAdminService,private router:Router, public sanitizer: DomSanitizer) {
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
  }

  selectPost(_id:string) {
    this._service.getBlogDetail(_id).subscribe({
      next:(data)=>{this.blog=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
