import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import tinymce from 'tinymce';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { BlogPost } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogAdminService {

  constructor(private http: HttpClient) {}

  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }

  postBlog(aBlog:any):Observable<any> {
    // const activeEditor = tinymce.activeEditor;
    // if (activeEditor) {
    //   const content = activeEditor.getContent();
    //   // Assign the content to the fashion object
    //   aBlog.content = content;
    // }

    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.post<any>("http://localhost:3001/blogs",JSON.stringify(aBlog),requestOptions).pipe(
      map(res=>JSON.parse(res) as BlogPost),
      retry(3),
      catchError(this.handleError))
  }

  getBlog():Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }

    return this.http.get<any>("http://localhost:3001/blogs",requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<BlogPost>),
      retry(3),
      catchError(this.handleError)
    )
  }

  getBlogDetail(id:string):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.get<any>("http://localhost:3001/blogs/"+id,requestOptions).pipe(
      map(res=>JSON.parse(res) as BlogPost),
      retry(3),
      catchError(this.handleError))
  }

  putBlog(id:string, aBlog:any):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.put<any>("http://localhost:3001/blogs/"+id,JSON.stringify(aBlog),requestOptions).pipe(
      map(res=>JSON.parse(res) as BlogPost),
      retry(3),
      catchError(this.handleError))
  }

  deleteBlog(_id:string):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.delete<any>("http://localhost:3001/blogs/"+_id,requestOptions).pipe(
      map(res=>JSON.parse(res) as BlogPost),
      retry(3),
      catchError(this.handleError))
  }
}
