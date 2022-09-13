import { Injectable } from '@angular/core';
import { BusRouteLocationDetail } from 'src/app/home/components/bus-route-location-detail/bus-route-location-detail.component';

@Injectable({
  providedIn: 'root'
})
export class PassengerDetailService {

  busRouteLocationDetail!:BusRouteLocationDetail
  totalSeat!:number
  fareRs!:number

  passengerList!:[]

  paymentType!:string;

  constructor() { }

  setBusRouteLocationDetail(bus:BusRouteLocationDetail){
    this.busRouteLocationDetail=bus
  }

  getBusRouteLocationDetail(){
    return this.busRouteLocationDetail
  }

  setPassengerList(passenger:[]){
    this.passengerList=passenger
  }

  getPassengerList(){
    return this.passengerList
  }

  setTotalSeat(seat:number){
    this.totalSeat=seat
  }

  getTotalSeat(){
   return this.totalSeat
  }

  setFareRs(fareRs:number){
    this.fareRs=fareRs;
  }

  getFareRs(){
    return this.fareRs;
  }

  setPaymentType(paymentType:string){
    this.paymentType =paymentType
  }

  getPaymentType(){
    return this.paymentType;
  }

}
