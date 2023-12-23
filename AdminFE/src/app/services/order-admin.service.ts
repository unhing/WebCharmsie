import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderAdminService {

  constructor(private http: HttpClient) {}

  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }

  getOrder():Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }

    return this.http.get<any>("http://localhost:3001/orders",requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<Order>),
      retry(3),
      catchError(this.handleError)
    )
  }

  getOrderDetail(id:string):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.get<any>("http://localhost:3001/orders/"+id,requestOptions).pipe(
      map(res=>JSON.parse(res) as Order),
      retry(3),
      catchError(this.handleError))
  }

  putOrder(id:string, aProduct:any):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.put<any>("http://localhost:3001/orders/"+id,JSON.stringify(aProduct),requestOptions).pipe(
      map(res=>JSON.parse(res) as Order),
      retry(3),
      catchError(this.handleError))
  }

  deleteOrder(_id:string):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.delete<any>("http://localhost:3001/orders/"+_id,requestOptions).pipe(
      map(res=>JSON.parse(res) as Order),
      retry(3),
      catchError(this.handleError))
  }
}
