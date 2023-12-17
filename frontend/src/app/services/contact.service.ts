import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { ContactForm } from '../models/contact-form.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {}

  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }

  postContactForm(aForm:any):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.post<any>("http://localhost:3001/contact",JSON.stringify(aForm),requestOptions).pipe(
      map(res=>JSON.parse(res) as ContactForm),
      retry(3),
      catchError(this.handleError))
    }
}
