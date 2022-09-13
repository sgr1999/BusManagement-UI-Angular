import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { District } from 'src/app/home/components/addcity/addcity.component';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  url='http://localhost:8080/district'

  constructor(private http:HttpClient) { }

  getDistrictList():Observable<District[]>{
    return this.http.get<any>(`${this.url}/getDistrictList`);
  }

  addDistrict(district:any, sname:string){
    return this.http.post(`${this.url}/addDistrict/${sname}`,district)
  }
}
