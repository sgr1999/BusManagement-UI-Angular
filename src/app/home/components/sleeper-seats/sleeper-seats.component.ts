import { BusBookingDetailService } from 'src/app/services/busBookingDetail/bus-booking-detail.service';
import { SleeperSeatsService } from './../../../services/sleeperSeats/sleeper-seats.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BusRouteLocationDetail } from '../bus-route-location-detail/bus-route-location-detail.component';

@Component({
  selector: 'app-sleeper-seats',
  templateUrl: './sleeper-seats.component.html',
  styleUrls: ['./sleeper-seats.component.css']
})
export class SleeperSeatsComponent implements OnInit {

 

  noOfSeatsLower=[
    {value:'5L'},
    {value:'4L'},
    {value:'3L'},
    {value:'11L'},
    {value:'10L'},
    {value:'9L'},
    {value:'17L'},
    {value:'16L'},
    {value:'15L'},
    {value:'23L'},
    {value:'22L'},
    {value:'21L'},
    {value:'29L'},
    {value:'28L'},
    {value:'27L'},
  ]

  noOfSeatsUpper=[
    {value:'6U'},
    {value:'1U'},
    {value:'2U'},
    {value:'12U'},
    {value:'7U'},
    {value:'8U'},
    {value:'18U'},
    {value:'13U'},
    {value:'14U'},
    {value:'24U'},
    {value:'19U'},
    {value:'20U'},
    {value:'30U'},
    {value:'25U'},
    {value:'26U'},
  ]

  seatNoLower:any;
  seatNoUpper:any;
  bookedSeats:any;
  selectSeat:boolean=false

  checkSeat:boolean=false;
  selectseat:boolean=false

  busDetail!:BusRouteLocationDetail;
  travelingDate!:string;

  seatsNumberList!:any
  seatsNumberLowerList!:any
  seatsNumberUpperList!:any
  

  constructor(private snack:MatSnackBar, private sleeperSeatsService:SleeperSeatsService, private busBookingDetailService:BusBookingDetailService) {
    this.seatNoLower=[]
    this.seatNoUpper=[]
    this.bookedSeats=[]
    this.seatsNumberList=[]
    this.seatsNumberLowerList=[]
    this.seatsNumberUpperList=[]
   }


  ngOnInit(): void {
    this.busDetail = this.busBookingDetailService.getBusBookingDetail();
    this.travelingDate = this.busBookingDetailService.getBookingDate();

    console.log("busDetail "+this.busDetail.busRouteBusDetailId)
    console.log("travelingDate "+this.travelingDate)

    this.getSeatsNumberList()
  }

  submitSeat(){

    if (this.bookedSeats<=0) {
      this.snack.open("Select Seat...!","OK",{
        verticalPosition:"top",
        horizontalPosition:"center",
        duration:4000
      })
    }
    this.sleeperSeatsService.setSleeperSeats(this.bookedSeats)
  }

  getSeatsNumberList(){
    this.busBookingDetailService.getSeatsNumberList(this.travelingDate, this.busDetail.busRouteBusDetailId.busRouteBusDetailId).subscribe(
      response=>{
        console.log(response)
        this.seatsNumberList=response

        this.seatsNumberList.forEach((value:string,i:number)=>{
          let count=0;
          this.noOfSeatsLower.forEach(e=>{

            if (value==e.value) {
              this.seatsNumberLowerList[count]=value
            }
            count++;
          })

          let count1=0
          this.noOfSeatsUpper.forEach(e=>{
            if (value==e.value) {
              console.log("value upper "+value)
              this.seatsNumberUpperList[count1]=value
            }
            count1++;
          })

          console.log("seatsNumberLowerList "+this.seatsNumberLowerList)
          console.log("seatsNumberLowerList "+this.seatsNumberUpperList)
      
        })
      },
      error=>{
        console.log(error)
      }
    )
  }

  getSeatNoLower(value:any){

    var remove=false

    this.seatNoLower.forEach((v:string, i:number)=>{
       if (v==value) {
         this.seatNoLower[i]='0'
         remove=true
       }
    })

    this.bookedSeats.forEach((v:string, i:number)=>{
      if (v==value) {
        this.bookedSeats.splice(i,1)
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

  let count =0;
    this.noOfSeatsLower.forEach(e=>{
      if (e.value==value && remove!=true) {
        this.seatNoLower[count]=value
        this.bookedSeats.push(value)
      }
      count++;
    })

    console.log("bookedSeats "+this.bookedSeats)
      console.log("getSeatNo "+this.seatNoLower)

      if (this.bookedSeats.length>0) {
        this.checkSeat=true
        this.selectSeat=true
      }
      else{
        this.checkSeat=false
        this.selectSeat=false
      }
  }

  getSeatNoUpper(value:any){


    let remove=false;
    this.seatNoUpper.forEach((v:string,i:number)=>{
      if (value==v) {
        this.seatNoUpper[i]='0'
        remove=true
      }
    })

    this.bookedSeats.forEach((v:string,i:number)=>{
      if (value==v) {
        this.bookedSeats.splice(i,1)
        
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

    let count=0
    this.noOfSeatsUpper.forEach(e=>{
      if (e.value==value && remove!=true) {
        this.seatNoUpper[count]=value
        this.bookedSeats.push(value)
      }
      count++;
    })

    console.log("bookedSeats "+this.bookedSeats)

    if (this.bookedSeats.length>0) {
      this.checkSeat=true
      this.selectSeat=true
    }
    else{
      this.checkSeat=false
      this.selectSeat=false
    }
  }



}
