import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusDetail } from 'src/app/home/components/bus-detail/bus-detail.component';

@Injectable({
  providedIn: 'root'
})
export class BusDetailService {

  url="http://localhost:8080/busDetail";

  constructor(private http:HttpClient) { }

  addBusDetail(busDetail:any){
    return this.http.post(`${this.url}/addBusDetail`,busDetail);
  }

  getBusDetailList():Observable<BusDetail[]>{
    return this.http.get<any>(`${this.url}/getBusDetailList`);
  }
}
