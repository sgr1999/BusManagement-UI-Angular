import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Customer } from './customer';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

customer!:Customer;
flag:boolean=false;
 data={
   firstName:'',
   lastName:'',
   userName:'',
   password:'',
   mobileNumber:'',
   gender:'',
   age:''
 }
  constructor(private customerService:CustomerService, private snack:MatSnackBar) { }

  ngOnInit(): void {

    this.customer=this.customerService.getCustomer();
   
  }

  genders: Gender[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
    {value: 'Other', viewValue: 'Other'},
  ];

  public doSubmitForm(){
    this.flag=true;
    if (this.customer==null) {
      
      if (this.data.age=="" && this.data.firstName=="" && this.data.lastName=="" && 
        this.data.userName=="" && this.data.mobileNumber=="" && this.data.gender=="") {
        this.snack.open("Fields Can Not be Empty","OK");
        this.flag=false;
        return;
      }
      this.customerService.addCustomer(this.data).subscribe(
        response=>{
          console.log(response);
          this.flag=false;
          window.location.href='/home/customerList'
          this.snack.open("Customer Added Successfully..!!");
        },
        error=>{
          console.log(error);
          this.flag=false;
          this.snack.open("Something went wrong..!!");
        }
      )
    }
    else{
      this.customerService.updateCustomer(this.customer,this.customer.customerId).subscribe(
        response=>{
          console.log(response);
          window.location.href='/home/customerList'
          this.snack.open("Customer Updated Successfully..!!","OK");
          this.flag=false;
        },
        error=>{
          this.snack.open("Something went wrong..!!","OK");
          this.flag=false;
        }
      )
    }
  }
}
