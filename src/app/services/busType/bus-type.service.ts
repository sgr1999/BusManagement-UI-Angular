import { MenuItem } from 'primeng/api';
import { BusType } from './../../home/components/bus-type/bus-type.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusTypeService {

  url='http://localhost:8080/busType';

  busType!:string;

  constructor(private http:HttpClient) { }

  addBusType(busType:string, busDepoName:string){
    return this.http.post(`${this.url}/addBusType/${busDepoName}`,busType);
  }

  getBusTypeList():Observable<BusType[]>{
    return this.http.get<any>(`${this.url}/getBusType`)
  }


  setBusType(busType:string){
    this.busType=busType
  }

  getBusType(){
    return this.busType;
  }
}
