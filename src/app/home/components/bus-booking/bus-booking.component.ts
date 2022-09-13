import { BusType } from './../bus-type/bus-type.component';
import { BusTypeService } from 'src/app/services/busType/bus-type.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus-booking',
  templateUrl: './bus-booking.component.html',
  styleUrls: ['./bus-booking.component.css']
})
export class BusBookingComponent implements OnInit {

  busTypes:BusType[]=[]

  busType!:string;

  constructor(private busTypeService:BusTypeService) { }

  ngOnInit(): void {
    this.getBusTypeList()
  }

  submitBusBooking(){
    this.busTypeService.setBusType(this.busType)
  }

  busTypeSelector(event:any){
    this.busType=event
    console.log(this.busType)
  }

  getBusTypeList(){
    this.busTypeService.getBusTypeList().subscribe(
      response=>{
        this.busTypes=response
      },
      error=>{
        console.log(error)
      }
    )
  }
}
