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

  getCustomerDetail(token: string):Observable<any> {
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.get<any>("http://localhost:3001/auth/profile/",requestOptions).pipe(
      map(res=>JSON.parse(res) as User),
      retry(3),
      catchError(this.handleError))
  }

  patchCustomer(aCustomer:any, token: string):Observable<any> {
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.patch<any>("http://localhost:3001/auth/profile/",JSON.stringify(aCustomer),requestOptions).pipe(
      map(res=>JSON.parse(res) as User),
      retry(3),
      catchError(this.handleError))
  }
}
