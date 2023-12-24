import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { WorkshopForm } from '../models/workshop-form.model';

@Injectable({
  providedIn: 'root'
})
export class WorkshopAdminService {

  constructor(private http: HttpClient) {}

  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }

  getWorkshopForm():Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }

    return this.http.get<any>("http://localhost:3001/workshop-registrations",requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<WorkshopForm>),
      retry(3),
      catchError(this.handleError)
    )
  }

  getWorkshopDetail(id:string):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.get<any>("http://localhost:3001/workshop-registrations/"+id,requestOptions).pipe(
      map(res=>JSON.parse(res) as WorkshopForm),
      retry(3),
      catchError(this.handleError))
  }

  patchWorkshopForm(id:string, updatedFields:any):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.patch<any>("http://localhost:3001/workshop-registrations/"+id,JSON.stringify(updatedFields),requestOptions).pipe(
      map(res=>JSON.parse(res) as WorkshopForm),
      retry(3),
      catchError(this.handleError))
  }

  deleteWorkshopForm(_id:string):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.delete<any>("http://localhost:3001/workshop-registrations/"+_id,requestOptions).pipe(
      map(res=>JSON.parse(res) as WorkshopForm),
      retry(3),
      catchError(this.handleError))
  }
}
