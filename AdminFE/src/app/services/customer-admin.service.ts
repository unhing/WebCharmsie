import { Injectable } from '@angular/core';
import { User } from '../models/customer.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerAdminService {

  constructor(private http: HttpClient) {}

  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }

  getCustomer():Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }

    return this.http.get<any>("http://localhost:3001/customers",requestOptions).pipe(
      map(res=>JSON.parse(res).result as Array<User>),
      retry(3),
      catchError(this.handleError)
    )
  }

  getCustomerDetail(id:string):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.get<any>("http://localhost:3001/customers/"+id,requestOptions).pipe(
      map(res=>JSON.parse(res) as User),
      retry(3),
      catchError(this.handleError))
  }

  putCustomer(id:string, aCustomer:any):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.put<any>("http://localhost:3001/customers/"+id,JSON.stringify(aCustomer),requestOptions).pipe(
      map(res=>JSON.parse(res) as User),
      retry(3),
      catchError(this.handleError))
  }

  deleteCustomer(_id:string):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.delete<any>("http://localhost:3001/customers/"+_id,requestOptions).pipe(
      map(res=>JSON.parse(res) as User),
      retry(3),
      catchError(this.handleError))
  }
}
