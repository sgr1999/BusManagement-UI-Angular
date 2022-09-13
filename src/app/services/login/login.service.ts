import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080"

  userFirstName!:string;
  userLastName!:string;
  mobileNumber!:string;

  constructor(private http:HttpClient) { }

  generateToken(credentials:any){
    return this.http.post(`${this.url}/user/token`,credentials)
  }

  loginUser(token:any,firstName:string,lastName:string,mobileNumber:string){
    localStorage.setItem("token",token)
    localStorage.setItem("userFirstName",firstName)
    localStorage.setItem("userLastName",lastName)
    localStorage.setItem("mobileNumber",mobileNumber)
    return true;
  }

  isLoggedIn(){

    let token= localStorage.getItem("token");
    if (token==undefined || token==null || token==='') {
      return false;
    }else{
      return true;
    }

  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userFirstName')
    localStorage.removeItem('userLastName')
    localStorage.removeItem('mobileNumber')
    return true;
  }

  getToken(){
    return localStorage.getItem('token');
  }

  setUserFirstName(firstName:string){
    localStorage.setItem("userFirstName",firstName)
    this.userFirstName=firstName;
    console.log(this.userFirstName)
  }
  setUserLastName(lastName:string){
    localStorage.setItem("userLastName",lastName)
    this.userLastName=lastName;
    console.log(this.userLastName)
  }

  setUserMobileNumber(mobileNumber:string){
    localStorage.setItem('mobileNumber',mobileNumber)
    this.mobileNumber=mobileNumber
    console.log(this.mobileNumber)
  }

  getUserFirstName(){
    return localStorage.getItem('userFirstName');
  }

  getUserLastName(){
    return localStorage.getItem('userLastName');
  }

  getUserMobileNumber(){
    return localStorage.getItem('mobileNumber');
  }

}
