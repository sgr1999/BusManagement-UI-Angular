import { SleeperSeatsService } from './../../../services/sleeperSeats/sleeper-seats.service';
import { LoginService } from './../../../services/login/login.service';
import { PassengerDetailService } from './../../../services/passengerDetail/passenger-detail.service';
import { BusBookingDetailService } from './../../../services/busBookingDetail/bus-booking-detail.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BusRouteLocationDetail } from '../bus-route-location-detail/bus-route-location-detail.component';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css']
})
export class PassengerDetailComponent implements OnInit {
  genders=[
    {value:'Male'},
    {value:'Female'},
    {value:'Other'}
  ]

  seats=[
    {value:1},
    {value:2},
    {value:3},
    {value:4},
    {value:5},
    {value:6},
    {value:7},
    {value:8},
    {value:9},
    {value:10}
  ]

  passengerForm!:FormGroup;
  passengerList:any;


  busDetail!:BusRouteLocationDetail;

  gender!:string;
  seatNo!:string;
  totalSeat!:number;

  fareRs:number=0;

  travelingDate!:string;

  userMobileNumber:any;


  firstNameform:boolean=false
  lastNameform:boolean=false
  ageform:boolean=false
  genderform:boolean=false
  seatBooked:boolean=false
  selectSeats=false

  bookedSeats:any


  constructor(private fb:FormBuilder, private busBookingDetailService:BusBookingDetailService, 
    private PassengerDetailService:PassengerDetailService, private loginService:LoginService, private sleeperSeatService:SleeperSeatsService) { 

    this.passengerList=[]

    this.bookedSeats=[]

    this.passengerForm= this.fb.group({
      firstName:['',Validators.compose([Validators.required, Validators.min(3)])],
      lastName:['',Validators.compose([Validators.required, Validators.min(3)])],
      age:['',Validators.compose([Validators.required])],
      gender:['',Validators.compose([Validators.required])],
      seatNo:''
    })

  }
  
  ngOnInit(): void {

    this.busDetail = this.busBookingDetailService.getBusBookingDetail();
    this.userMobileNumber= this.loginService.getUserMobileNumber();
    this.travelingDate = this.busBookingDetailService.getBookingDate();

    console.log("busDetail "+this.busDetail)
    this.bookedSeats = this.sleeperSeatService.getSleeperSeats();
    this.totalSeat = this.bookedSeats.length
    this.seatSelector();

    console.log("bookedSeats "+this.bookedSeats)
    // this.busBookingDetailService.setBookingDate(this.travelingDate)
    if (this.busDetail==null) {
      window.location.href='/home/busBooking'
    }
    
  }

  count:number=1;
  seatSequence:number=0;

  addItem(){
    console.log(this.passengerForm.value)

    if (this.totalSeat==null) {
      this.selectSeats=true
      return;
    }

    if (this.totalSeat==this.count) {
      this.seatBooked=true;
    }
    if (this.passengerForm.get('firstName')?.value=='') {
      this.firstNameform=true
      return
    }
    if (this.passengerForm.get('lastName')?.value=='') {
      this.lastNameform=true
      return
    }
    if (this.passengerForm.get('age')?.value=='') {
      this.ageform=true
      return
    }
    if (this.passengerForm.get('gender')?.value=='') {
      this.genderform=true
      return
    }
    
    this.seatNo = this.bookedSeats[this.seatSequence]
    console.log("seatNo "+this.seatNo)
    this.passengerForm.get('seatNo')?.setValue(this.seatNo);
   
    this.passengerList.push(this.passengerForm.value)  
    console.log(this.passengerList.value)
    console.log("ok")

    this.seatSequence++
    this.count =this.count+1;

    this.PassengerDetailService.setBusRouteLocationDetail(this.busDetail)
    this.PassengerDetailService.setPassengerList(this.passengerList)
    this.PassengerDetailService.setFareRs(this.fareRs)
    this.PassengerDetailService.setTotalSeat(this.totalSeat)

    console.log("count "+this.count)
  }


  removeDetail(detail:any){
    this.passengerList.forEach((value:any,index:any)=>{
      if (value==detail) {
        this.passengerList.splice(index,1);
        this.count =this.count-1;
        this.seatBooked=false;
        
      }
    })
  }

  genderSelector(event:any){
    this.gender=event
    console.log(this.gender)
  }

  seatSelector(){
    this.selectSeats=false
    this.seatBooked=false;
    this.fareRs=this.busDetail.fareRs*this.totalSeat;
    
    if (this.totalSeat<this.count) {
      this.passengerList=['']
      this.count=0
    }
  }
}
