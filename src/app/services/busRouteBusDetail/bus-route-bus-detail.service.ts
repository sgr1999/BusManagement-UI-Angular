import { BusRouteBusDetail } from './../../home/components/bus-route-location/bus-route-location.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusRouteBusDetailService {

  url = "http://localhost:8080/busRouteBusDetail"

  busRouteBusDetail!:BusRouteBusDetail;
  source!:string;
  destination!:string;

  constructor(private http:HttpClient) { }

  addBusRouteBusDetail(busRouteBusDetail:any){
    return this.http.post(`${this.url}/addBusRouteBusDetail`,busRouteBusDetail)
  }

  getBusRouteBusDetailBySource(source:string,destination:string):Observable<BusRouteBusDetail[]>{
    return this.http.get<any>(`${this.url}/getBusRouteBusDetailBySource/${source}/${destination}`)
  }
  

  getBusRouteBusDetailById(id:number){
    return this.http.get(`${this.url}/getBusRouteBusDetail/${id}`)
  }

  setBusRouteBusDetail(bus:BusRouteBusDetail){
    this.busRouteBusDetail=bus;
  }

  getBusRouteBusDetail(){
    return this.busRouteBusDetail;
  }

  setSource(source:string){
    this.source=source
  }

  getSource(){
    return this.source;
  }

  setDestination(destination:string){
    this.destination=destination;
  }

  getDestination(){
    return this.destination;
  }
}
