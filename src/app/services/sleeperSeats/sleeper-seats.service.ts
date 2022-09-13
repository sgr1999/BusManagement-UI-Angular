import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SleeperSeatsService {

  url= 'http://localhost:8080'

  sleeperSeats:[]=[]
  seaterSeats:[]=[]

  constructor(private http:HttpClient) { }

  setSleeperSeats(seat:any){
    this.sleeperSeats=seat;
  }

  getSleeperSeats(){
    return this.sleeperSeats
  }
}
