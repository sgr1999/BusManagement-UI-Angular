import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from 'src/app/home/components/addcity/addcity.component';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  url="http://localhost:8080";

  constructor(private http:HttpClient) { }

  addState(state:any){
    return this.http.post(`${this.url}/state/addState`,state);
  }

  addCity(city:any, sname:string, dname:string){
    return this.http.post(`${this.url}/city/addCity/${sname}/${dname}`,city);
  }

  getCityList():Observable<City[]>{
    return this.http.get<any>(`${this.url}/city/getCityList`);
  }
}
