import { BusBookingDetail } from './../bus-booking-detail/bus-booking-detail.component';
import { PayService } from './../../../services/pay/pay.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  // busBookingDetail:any

  busBookingDetail!:BusBookingDetail;

  constructor(private payService:PayService) { 
   
  }

  ngOnInit(): void {
    this.busBookingDetail= this.payService.getBusBookingDetail();
    console.log(this.busBookingDetail)
  }

}
