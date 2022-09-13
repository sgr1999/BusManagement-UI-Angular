import { BusBookingDetail } from './../../home/components/bus-booking-detail/bus-booking-detail.component';

import { BusRouteLocationDetail } from './../../home/components/bus-route-location-detail/bus-route-location-detail.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  url='http://localhost:8080/busBooking'

  busBookingDetail!:BusBookingDetail

  constructor(private http:HttpClient) { }

  addBusBooking(mobileNumber:string, travlingDate:string, paymentType:string ,busDetail:any){
    return this.http.post(`${this.url}/addBusBooking/${mobileNumber}/${travlingDate}/${paymentType}`,busDetail);
  }

  setBusBookingDetail(bus:BusBookingDetail){
    this.busBookingDetail=bus
  }

  getBusBookingDetail(){
    return this.busBookingDetail;
  }
 
}
