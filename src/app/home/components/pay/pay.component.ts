import { SleeperSeatsService } from './../../../services/sleeperSeats/sleeper-seats.service';
import { BusBookingDetail } from './../bus-booking-detail/bus-booking-detail.component';
import { PayService } from './../../../services/pay/pay.service';
import { BusRouteLocationDetail } from 'src/app/home/components/bus-route-location-detail/bus-route-location-detail.component';

import { BusBookingDetailService } from './../../../services/busBookingDetail/bus-booking-detail.service';
import { LoginService } from './../../../services/login/login.service';
import { PassengerDetailService } from 'src/app/services/passengerDetail/passenger-detail.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  netBankings=[
    {value:'SBI_Bank'},
    {value:'ICICI BanK'},
    {value:'CENTRAL Bank'},
    {value:'KOTAK Bank'}
  ]

  cards=[
    {value:'Credit Card SBI Bank'},
    {value:'Debit Card ICICI BanK'},
    {value:'Debit Card CENTRAL Bank'},
    {value:'Credit Card KOTAK Bank'}
  ]

  upis=[
    {value:'Phone Pay'},
    {value:'Google Pay'},
    {value:'Paytem'},
    {value:'Amazon Pay'}
  ]

  netBanking!:string;
  card!:string;
  upi!:string;

  progressBar:boolean=false

    busDetail!:BusRouteLocationDetail;
    passengerList:any;
    mobileNumber!:any
    travlingDate!:string
    paymentType!:string

    transactionId!:string
    bookedSeats:any

  booking:any;

  busBookingDetail!:BusBookingDetail

    
    constructor(private passengerDetailService:PassengerDetailService, private loginService:LoginService, private busBookingDetailService:BusBookingDetailService, 
      private payService:PayService, private sleeperSeatsService:SleeperSeatsService, private router:Router) { 
      this.passengerList=[]
      this.bookedSeats=[]
    }

  ngOnInit(): void {

    this.busDetail = this.passengerDetailService.getBusRouteLocationDetail();
   
    this.passengerList = this.passengerDetailService.getPassengerList();
    this.mobileNumber = this.loginService.getUserMobileNumber();
    this.travlingDate = this.busBookingDetailService.getBookingDate();

    this.bookedSeats = this.sleeperSeatsService.getSleeperSeats();

    console.log("bookedSeats "+this.bookedSeats)

    this.booking={
      busDetail:this.busDetail,
      passengerList:this.passengerList,
      bookedSeats:this.bookedSeats
    }
    
  
  }

  submitPayment(){
  
    this.progressBar=true
    this.payService.addBusBooking(this.mobileNumber, this.travlingDate, this.paymentType,this.booking).subscribe(
      (response:any)=>{
        console.log(response)
        this.busBookingDetail=response
        console.log(this.busBookingDetail)
        this.payService.setBusBookingDetail(this.busBookingDetail);
        
        setTimeout(()=>{
         this.router.navigate(['/home/paymentSuccess']);
          this.progressBar=false
        },2300)
        
      },
      error=>{
        console.log(error)
        setTimeout(()=>{
          this.router.navigate(['/home/errorPage']);
           this.progressBar=false
         },2300)
      }
    )
  }


  netBankingSelector(event:any){
    this.netBanking=event

    this.card='';
    this.upi='';
    this.paymentType='Net Banking'
    this.passengerDetailService.setPaymentType('Net Banking')
  }

  cardSelector(event:any){
    this.card=event

    this.netBanking='';
    this.upi=''
    this.paymentType=this.card
    this.passengerDetailService.setPaymentType(this.card)
  }

  upiSelector(event:any){
    this.upi=event

    this.netBanking='';
    this.card='';
    this.paymentType=this.upi
    this.passengerDetailService.setPaymentType(this.upi)
  }


}
