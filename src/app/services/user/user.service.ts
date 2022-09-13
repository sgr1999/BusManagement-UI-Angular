import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url='http://localhost:8080/user'
  constructor(private http:HttpClient) { }

  userName!:string;

  getUser(username:any):Observable<User>{
    return this.http.get<any>(`${this.url}/getUsername/${username}`)
  }

  setUsername(username:any){
    return this.userName=username;
  }

  getUsername(){
    return this.userName;
  }
}
