import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: HttpClient) { }

  public saveUser(user: User): Observable<any> {
    const url = 'http://localhost:3000/blogs';
    return this.http.post<any>(url, user);
  }

  public getUser(): Observable<any> {
    const url = 'http://localhost:3000/blogs';
    return this.http.get<any>(url);
  }

}
