import { BusDepoRoute } from './../../home/components/bus-depo-route/bus-depo-route.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusDepoRouteService {

  url="http://localhost:8080/busDepoRoute"

  constructor(private http:HttpClient) { }

  addBusDepoRoute(busDepoRoute:any){
    return this.http.post(`${this.url}/addBusDepoRoute`,busDepoRoute)
  }

  getBusDepoRouteList():Observable<BusDepoRoute[]>{
    return this.http.get<any>(`${this.url}/getBusDepoRoute`);
  }
}
