import { BusBookingDetailService } from 'src/app/services/busBookingDetail/bus-booking-detail.service';
import { SleeperSeatsService } from './../../../services/sleeperSeats/sleeper-seats.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { BusRouteLocationDetail } from '../bus-route-location-detail/bus-route-location-detail.component';

@Component({
  selector: 'app-seater-seats',
  templateUrl: './seater-seats.component.html',
  styleUrls: ['./seater-seats.component.css']
})
export class SeaterSeatsComponent implements OnInit {

  noOfSeatsLower=[
    {value:'6A'},
    {value:'5A'},
    {value:'1A'},
    {value:'2A'},
    {value:'7B'},
    {value:'8B'},
    {value:'4B'},
    {value:'3B'},
    {value:'10C'},
    {value:'9C'},
    {value:'13C'},
    {value:'14C'},
    {value:'11D'},
    {value:'12D'},
    {value:'16D'},
    {value:'15D'},
    {value:'20E'},
    {value:'19E'},
    {value:'17E'},
    {value:'18E'},
    {value:'21F'},
    {value:'22F'},
    {value:'23F'},
    {value:'24F'},
    {value:'28G'},
    {value:'27G'},
    {value:'26G'},
    {value:'25G'},
    {value:'29H'},
    {value:'30H'},
    {value:'32H'},
    {value:'31H'},
    {value:'36I'},
    {value:'35I'},
    {value:'33I'},
    {value:'34I'},
    {value:'37J'},
    {value:'38J'},
    {value:'39J'},
    {value:'40J'},
  ]

  busDetail!:BusRouteLocationDetail;
  travelingDate!:string;
  
  seats:any;
  bookedSeats:any
  seatsNumberList:any;
  bookedSeatsList:any

  checkSeat:boolean=false
  selectSeat=false

  constructor(private snack:MatSnackBar, private sleeperSeatsService:SleeperSeatsService, private busBookingDetailService:BusBookingDetailService) { 
    this.seats=[];
    this.bookedSeats=[]
    this.seatsNumberList=[]
    this.bookedSeatsList=[]
  }

  ngOnInit(): void {

    this.busDetail = this.busBookingDetailService.getBusBookingDetail();
    this.travelingDate = this.busBookingDetailService.getBookingDate();

    this.getSeatNumberList();
  }

  submitSeat(){
    if (this.bookedSeats.length<=0) {
      this.snack.open("Select seat..!","OK",{
        verticalPosition:'top',
        horizontalPosition:'center',
        duration:4000
      })
      return;
    }

    this.sleeperSeatsService.setSleeperSeats(this.bookedSeats);
  }

  getSeatNumberList(){
    this.busBookingDetailService.getSeatsNumberList(this.travelingDate, this.busDetail.busRouteBusDetailId.busRouteBusDetailId).subscribe(
      response=>{
        this.seatsNumberList=response

        console.log(this.seatsNumberList)
        this.seatsNumberList.forEach((value:string, index:number)=>{

          let count=0;
          this.noOfSeatsLower.forEach(e=>{
            if (e.value==value) {
              this.bookedSeatsList[count]=value;
            }

            count++;
          })
        })
      }
    )
  }

  getSeat(seat:string){
    console.log(seat)

    let remove=false;
    this.seats.forEach((v:string, i:number)=>{
      if (v==seat) {
        this.seats[i]=0

        this.bookedSeats.forEach((v:string,index:number)=>{
          if (v==seat) {
            this.bookedSeats.splice(index,1)
          }
        })
        remove=true
      }
    })

    if (this.bookedSeats.length>=6) {
      this.snack.open("You can not book seats more then 6","OK",{
        verticalPosition:"top",
        horizontalPosition:"center",
        duration:4000
      })
      return;
    }

    let count=0;
    this.noOfSeatsLower.forEach(e=>{
      if (e.value==seat && remove!=true) {
        this.seats[count]=seat;
        this.bookedSeats.push(seat)
      }
      count++;
    })

    if (this.bookedSeats.length>0) {
      this.checkSeat=true;
      this.selectSeat=true
    }
    else{
      this.selectSeat=false
      this.checkSeat=false;
    }

    console.log("seats "+this.seats)
    console.log("bookedSeats "+this.bookedSeats)
  }
}
