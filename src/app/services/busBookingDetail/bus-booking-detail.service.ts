import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusRouteLocationDetail } from 'src/app/home/components/bus-route-location-detail/bus-route-location-detail.component';

@Injectable({
  providedIn: 'root'
})
export class BusBookingDetailService {

  url='http://localhost:8080/busBooking'

  busDetail!:BusRouteLocationDetail;
  bookingDate!:string

  constructor(private http:HttpClient) { }

  getSeatsNumberList(travelingDate:string, busRouteBusDetailId:number){
    return this.http.get(`${this.url}/getSeatNumberDetail/${travelingDate}/${busRouteBusDetailId}`)
  }

  setBusBookingDetail(bus:any){
    this.busDetail=bus;
  }

  getBusBookingDetail(){
   return this.busDetail;
  }


  setBookingDate(date:string){
    this.bookingDate = date
  }

  getBookingDate(){
    return this.bookingDate;
  }
}
