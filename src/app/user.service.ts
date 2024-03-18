import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://192.168.5.103:8080/poll'

  httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
  }
  constructor(private http: HttpClient) { }

  userName = ""
  setUserName(userName: string) {
    this.userName = userName ;
  }

  getUserName() {
    return this.userName;
  }

  login(userName: string , password: string): Observable<any> {
    const url = `${this.url}/verify`;
    return this.http.post<any>(url , {userName , password}) ;
  }

  adduser(userName: string , password: string , email : String): Observable<any> {
    const url = `${this.url}/adduser`;
    return this.http.post<any>(url , {userName , password , email}) ;
  }

}
