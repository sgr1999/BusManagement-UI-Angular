import { SourceDestination } from './../../home/components/source-destination/source-destination.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SourceDestinationService {

  url="http://localhost:8080/sourceDestination";

  constructor(private http:HttpClient) { }

  addSourceDestination(sname:string,dname:string,cname:string, source:any){
    return this.http.post(`${this.url}/addSourceDestination/${sname}/${dname}/${cname}`,source);
  }

  getSourceDestinationList():Observable<SourceDestination[]>{
    return this.http.get<any>(`${this.url}/getSourceDestination`)
  }
}
