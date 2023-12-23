import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

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
      map(res=>JSON.parse(res) as Array<User>),
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

  getCustomerDetailToken(token:string):Observable<any> {
    const headers=new HttpHeaders().set('Authorization', `Bearer ${token}`)
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.get<any>("http://localhost:3001/customers/",requestOptions).pipe(
      map(res=>JSON.parse(res) as User),
      retry(3),
      catchError(this.handleError))
  }
}
