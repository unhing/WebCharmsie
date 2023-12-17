import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { WorkshopForm } from '../models/workshop-form.model';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  constructor(private http: HttpClient) {}

  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }

  postWorkshopForm(aForm:any):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }

    return this.http.post<any>("http://localhost:3001/workshop-registrations",JSON.stringify(aForm),requestOptions).pipe(
      map(res=>JSON.parse(res) as WorkshopForm),
      retry(3),
      catchError(this.handleError)
    )
  }
}
