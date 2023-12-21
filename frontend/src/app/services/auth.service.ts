import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, retry, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  get isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }

  login(credentials: any): Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.post<any>("http://localhost:3001/auth/login",JSON.stringify(credentials),requestOptions).pipe(
      map(res=>JSON.parse(res) as User),
      retry(3),
      catchError(this.handleError))
  }

  logout(): void {
    // Clear authentication status and token
    this.setLoggedIn(false);
    localStorage.removeItem('token');
  }

  setLoggedIn(value: boolean): void {
    this.isLoggedInSubject.next(value);
  }

  signup(user: any): Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.http.post<any>("http://localhost:3001/auth/signup",JSON.stringify(user),requestOptions).pipe(
      map(res=>JSON.parse(res) as User),
      retry(3),
      catchError(this.handleError))
  }
}
