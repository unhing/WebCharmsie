import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, tap, throwError } from 'rxjs';
import { Product } from '../models/product.model';

// const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  // getAllProducts(limit = '12', sort = 'desc', category?: string): Observable<Array<Product>> {
  //   return this.httpClient.get<Array<Product>>(
  //     `${STORE_BASE_URL}/products${
  //       category ? '/category/' + category : ''
  //     }?sort=${sort}&limit=${limit}`
  //   )
  // }

  // getAllCategories(): Observable<Array<string>> {
  //   return this.http.get<Array<string>>(
  //     'http://localhost:3001/products/'
  //   )
  // }

  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }

  getProduct(category?: string, sort='desc'):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }

    return this.http.get<any>(`http://localhost:3001/products/paginate?sort=${sort}${category ? '&category=' + category : ''}`,requestOptions).pipe(
      map(res=>{
        //const parsedResponse = typeof res === 'string' ? JSON.parse(res) : res;
        return JSON.parse(res).result
      }),
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
}
