import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductAdminService {

  constructor(private http: HttpClient) {}

  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }

  postProduct(aProduct:any):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.post<any>("http://localhost:3001/products",JSON.stringify(aProduct),requestOptions).pipe(
      map(res=>JSON.parse(res) as Product),
      retry(3),
      catchError(this.handleError))
  }

  getProduct():Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }

    return this.http.get<any>("http://localhost:3001/products",requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<Product>),
      retry(3),
      catchError(this.handleError)
    )
  }

  getProductDetail(id:string):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.get<any>("http://localhost:3001/products/"+id,requestOptions).pipe(
      map(res=>JSON.parse(res) as Product),
      retry(3),
      catchError(this.handleError))
  }

  putProduct(id:string, aProduct:any):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.put<any>("http://localhost:3001/products/"+id,JSON.stringify(aProduct),requestOptions).pipe(
      map(res=>JSON.parse(res) as Product),
      retry(3),
      catchError(this.handleError))
  }

  deleteProduct(_id:string):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.delete<any>("http://localhost:3001/products/"+_id,requestOptions).pipe(
      map(res=>JSON.parse(res) as Product),
      retry(3),
      catchError(this.handleError))
  }
}
