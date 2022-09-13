import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State } from 'src/app/home/components/addcity/addcity.component';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  url='http://localhost:8080/state'

  constructor(private http:HttpClient) { }

  getStateList():Observable<State[]>{
    return this.http.get<any>(`${this.url}/getState`);
  }
}
