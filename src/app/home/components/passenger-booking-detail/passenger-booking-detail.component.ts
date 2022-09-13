import { Component, OnInit } from '@angular/core';
import { BusBookingDetailService } from 'src/app/services/busBookingDetail/bus-booking-detail.service';
import { LoginService } from 'src/app/services/login/login.service';
import { PassengerDetailService } from 'src/app/services/passengerDetail/passenger-detail.service';
import { BusRouteLocationDetail } from '../bus-route-location-detail/bus-route-location-detail.component';
import { BusRouteBusDetail } from '../bus-route-location/bus-route-location.component';

export interface PayBookingDetail{

  busDetail:BusRouteLocationDetail,
  passengerList:[],
  fareRs:number,
  totalSeat:number,
  mobileNumber:any,
  travlingDate:string,
  paymentType:string

}


@Component({
  selector: 'app-passenger-booking-detail',
  templateUrl: './passenger-booking-detail.component.html',
  styleUrls: ['./passenger-booking-detail.component.css']
})
export class PassengerBookingDetailComponent implements OnInit {

  seeDetailToggle:boolean=false
  count:number=0;

  
  passengerList:any;
  busDetail!:BusRouteLocationDetail;
  mobileNumber!:any
  

  bookingDetail={
    fareRs:0,
    totalSeat:0,
    travlingDate:'',
    paymentType:''
  }


  constructor(private passengerDetailService:PassengerDetailService, private loginService:LoginService, private busBookingDetailService:BusBookingDetailService) { }

  ngOnInit(): void {

    this.busDetail = this.passengerDetailService.getBusRouteLocationDetail();
   
    this.passengerList = this.passengerDetailService.getPassengerList();

    this.bookingDetail.fareRs= this.passengerDetailService.getFareRs()
    this.bookingDetail.totalSeat = this.passengerDetailService.getTotalSeat()
    this.mobileNumber = this.loginService.getUserMobileNumber();
    this.bookingDetail.travlingDate = this.busBookingDetailService.getBookingDate();


    console.log(this.busDetail)
    console.log(this.passengerList)
    console.log(this.bookingDetail.fareRs)
    console.log(this.bookingDetail.totalSeat)
    console.log(this.mobileNumber)
    console.log(this.bookingDetail.travlingDate)
  }




  seeDetails(){

    if (this.seeDetailToggle==false) {
      this.seeDetailToggle=true
      this.count=1
    }

    if (this.seeDetailToggle==true && this.count!=1) {
      this.seeDetailToggle=false
    }
    this.count=0

    console.log("ok")
  }
}
