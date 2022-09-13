import { BusDepoSource } from './../../home/components/source-destination/source-destination.component';
import { Observable } from 'rxjs';
import { BusDepo } from './../../home/components/bus-depo/bus-depo.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusDepoService {

  url="http://localhost:8080/busDepo"

  constructor(private http:HttpClient) { }

  addBusDepo(busDepo:BusDepo, sname:string,dname:string, cname:string){
    return this.http.post(`${this.url}/addBusDepo/${sname}/${dname}/${cname}`,busDepo);
  }

  getBusDepoList():Observable<BusDepo[]>{
    return this.http.get<any>(`${this.url}/getBusDepo`);
  }

  getBusDepoList1():Observable<BusDepoSource[]>{
    return this.http.get<any>(`${this.url}/getBusDepoList`);
  }
}
