import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/home/components/customers/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl:string="http://localhost:8080";

  message!:string;
  customer!:Customer;

  constructor(private http:HttpClient) { }

  setMessage(data:any){
    this.message=data;
  }

  getMessage(){
    return this.message;
  }

  setCustomer(customer:Customer){
    this.customer=customer;
  }

  getCustomer(){
    return this.customer;
  }

  addCustomer(data:any){

    return this.http.post(`${this.baseUrl}/customer/addCustomer`,data);
  }

  public getCustomerList():Observable<Customer[]>{

    return this.http.get<any>(`${this.baseUrl}/customer/getCustomer`)
    
  }

  public getCustomerById(id:number):Observable<Customer>{
    return this.http.get<any>(`${this.baseUrl}/customer/getCustomer/${id}`);
  }

  public updateCustomer(customer:Customer, id:number):Observable<Customer>{
    return this.http.put<any>(`${this.baseUrl}/customer/updateCustomer/${id}`,customer);
  }
  public deleteCustomerById(id:number):Observable<Customer>{
    return this.http.delete<any>(`${this.baseUrl}/customer/deleteCustomer/${id}`);
  }
}
