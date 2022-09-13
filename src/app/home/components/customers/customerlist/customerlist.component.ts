import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuItem } from 'primeng/api';
import { CustomerService } from './../../../../services/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer/customer';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  searchText:any;
  item:MenuItem[]=[];
  customers:Customer[]=[];
  selectedCustomers:Customer[]=[];
  loading:boolean=true;

  constructor(private customerService:CustomerService, private snack:MatSnackBar) { }

  public getCustomer():void{
    this.customerService.getCustomerList().subscribe(
      (response:Customer[])=>{
        this.customers=response;
        this.loading=false;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
        console.log(error);
      }
    )
  }
  ngOnInit(): void {
    this.getCustomer();
  }

  public deleteCustomer(id:number){
    this.customerService.deleteCustomerById(id).subscribe(
      response=>{
        console.log("delete");
        this.getCustomer();
        this.snack.open("Customer Deleted Successfully..!!","OK");
      }
    )
  }

  public updateCustomer(customer:Customer, id:number){
    this.customerService.setCustomer(customer);
  }
}
