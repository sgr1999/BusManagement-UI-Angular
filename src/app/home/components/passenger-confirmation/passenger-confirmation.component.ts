import { BusBookingDetailService } from './../../../services/busBookingDetail/bus-booking-detail.service';
import { LoginService } from './../../../services/login/login.service';
import { PassengerConfirmationService } from './../../../services/passengerConfirmation/passenger-confirmation.service';
import { Component, OnInit } from '@angular/core';
import { PassengerDetailService } from 'src/app/services/passengerDetail/passenger-detail.service';
import { BusRouteLocationDetail } from '../bus-route-location-detail/bus-route-location-detail.component';

@Component({
  selector: 'app-passenger-confirmation',
  templateUrl: './passenger-confirmation.component.html',
  styleUrls: ['./passenger-confirmation.component.css']
})
export class PassengerConfirmationComponent implements OnInit {

  busDetail!:BusRouteLocationDetail
  totalSeat!:number
  fareRs!:number

  passengerList:any
  userMobileNumber:any

  travlingDate!:string;

  constructor(private passengerDetailService:PassengerDetailService, private loginService:LoginService, private busBookingDetailService:BusBookingDetailService) { 
    this.passengerList=[]
  }

  ngOnInit(): void {

    this.busDetail= this.passengerDetailService.getBusRouteLocationDetail()
    this.passengerList= this.passengerDetailService.getPassengerList()
    this.fareRs= this.passengerDetailService.getFareRs()
    this.totalSeat= this.passengerDetailService.getTotalSeat()
    this.userMobileNumber = this.loginService.getUserMobileNumber();
    this.travlingDate = this.busBookingDetailService.getBookingDate();
    
    if (this.busDetail==null) {
      window.location.href='/home/busBooking'
    }
    console.log(this.busDetail)
    console.log(this.passengerList)
    console.log(this.fareRs)
    console.log(this.totalSeat)
  }

}
