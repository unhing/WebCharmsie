import { Component } from '@angular/core';
import { BlogPost } from '../../models/blog.model';
import tinymce from 'tinymce';
import { BlogAdminService } from '../../services/blog-admin.service';
import { fadeInOutAnimation } from '../../services/fade-in-out.animation';

@Component({
  selector: 'app-postnew',
  templateUrl: './postnew.component.html',
  styleUrls: ['./postnew.component.css'],
  animations: [fadeInOutAnimation],
})
export class PostnewComponent {
  blog = new BlogPost;
  errMessage:string='';

  constructor(private blogService: BlogAdminService) { } 

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

  onSubmit() {
    // const activeEditor = tinymce.activeEditor;

    // if (activeEditor) {
    //   const content = activeEditor.getContent();
    //   if (content.trim() !== '') {
    //     this.blog.content = content;
    //   } else {
    //     console.error('TinyMCE editor content is empty.');
    //     return; // Optionally, you can handle this case differently
    //   }
    // } else {
    //   console.error('TinyMCE editor not available.');
    //   return; // Optionally, you can handle this case differently
    // }

    this.blog.date = new Date().toLocaleDateString();
    this.blogService.postBlog(this.blog).subscribe({
      next:(data)=>{this.blog = new BlogPost()},
      error:(err)=>{this.errMessage=err}
    })
  } 
}
