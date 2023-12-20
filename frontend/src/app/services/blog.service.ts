import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { BlogPost } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {}

  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
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
}
