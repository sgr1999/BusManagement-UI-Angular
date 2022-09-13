import { Observable } from 'rxjs';
import { BusRouteBusDetail } from './../../home/components/bus-route-location/bus-route-location.component';
import { BusDetail } from 'src/app/home/components/bus-detail/bus-detail.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusRouteLocationDetail } from 'src/app/home/components/bus-route-location-detail/bus-route-location-detail.component';

@Injectable({
  providedIn: 'root'
})
export class BusRouteLocationDetailService {

  url="http://localhost:8080/busRouteBookingLocation"

  constructor(private http:HttpClient) { }

  addBusRouteBookingLocation(listData:[], busDetailId:number){
    return this.http.post(`${this.url}/addBusRouteBookingLocation/${busDetailId}`,listData);
  }

  getBusRouteLocationDetailList():Observable<BusRouteLocationDetail[]>{
    return this.http.get<any>(`${this.url}/getBusRouteBookingLocationList`);
  }

  getBusRouteBusDetailBySourceList(source:string,destination:string,busType:string):Observable<BusRouteLocationDetail[]>{
    return this.http.get<any>(`${this.url}/getBusLocationBySourceDestination/${source}/${destination}/${busType}`)
  }
}
