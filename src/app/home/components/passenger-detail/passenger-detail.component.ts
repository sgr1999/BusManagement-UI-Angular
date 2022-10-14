import { SleeperSeatsService } from './../../../services/sleeperSeats/sleeper-seats.service';
import { LoginService } from './../../../services/login/login.service';
import { PassengerDetailService } from './../../../services/passengerDetail/passenger-detail.service';
import { BusBookingDetailService } from './../../../services/busBookingDetail/bus-booking-detail.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  show=false
  bookedSeats:any
  addmore!: FormGroup;

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
    // this.seatSelector();

    console.log("bookedSeats "+this.bookedSeats)
    this.busBookingDetailService.setBookingDate(this.travelingDate)
    if (this.busDetail==null) {
      // window.location.href='/home/busBooking'
    }

   
    this.addmore= this.fb.group({
      itemRows: this.fb.array([this.initItemRows(this.bookedSeats[0])])
    })
 

    for (let index = 0; this.bookedSeats.length-1 > index; index++) {
    
      this.formArr.push(this.initItemRows(this.bookedSeats[index+1]))
      this.passengerList.push(this.initItemRows(this.bookedSeats[index]))
    }
    
  }

  get formArr(){
    return this.addmore.get('itemRows') as FormArray;
  }

    initItemRows(seat:any){
      return this.fb.group({
        firstName:['',Validators.compose([Validators.required, Validators.min(3)])],
        lastName:['',Validators.compose([Validators.required, Validators.min(3)])],
        age:['',Validators.compose([Validators.required])],
        gender:['',Validators.compose([Validators.required])],
        seatNo:seat
      })
    }

    addNewRow(){
      this.formArr.push(this.initItemRows("f"))
    }

    submit(){
      console.log("add more "+this.addmore.get('itemRows')?.value)
      this.passengerList=this.addmore.get('itemRows')?.value
      
     console.log(this.passengerList)


    this.PassengerDetailService.setBusRouteLocationDetail(this.busDetail)
    this.PassengerDetailService.setPassengerList(this.passengerList)
    this.PassengerDetailService.setFareRs(this.fareRs)
    this.PassengerDetailService.setTotalSeat(this.totalSeat)

     this.PassengerDetailService.setPassengerList(this.passengerList)
    }

  count:number=1;
  seatSequence:number=0;
  addItem(){
   

    if (this.totalSeat==null) {
      this.selectSeats=true
      return;
    }

    if (this.totalSeat==this.passengerList.length+1) {
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
    if (this.seatNo!=null || this.seatNo!='' || this.seatNo!=undefined) {
      this.passengerForm.get('seatNo')?.setValue(this.seatNo);
    }
   
    this.passengerList.push(this.passengerForm.value)  

    this.seatSequence++
    this.count =this.count+1;

    this.PassengerDetailService.setBusRouteLocationDetail(this.busDetail)
    this.PassengerDetailService.setPassengerList(this.passengerList)
    this.PassengerDetailService.setFareRs(this.fareRs)
    this.PassengerDetailService.setTotalSeat(this.totalSeat)

    console.log("count "+this.count)
    console.log("passengerList "+this.passengerList)
  }


  removeDetail(detail:any){
    this.passengerList.forEach((value:any,index:any)=>{
      if (value==detail) {

        this.seatSequence=index
        console.log("seatNo "+this.passengerList[index])
        
        this.passengerList.splice(index,1);
        this.count =this.count-1;
        this.seatBooked=false;
     
        console.log("value "+value)
        if (this.passengerForm.value!=value) {
          
          this.passengerForm.setValue(value)
        }
      
        console.log("index "+index)
        console.log(this.passengerForm.value)
      }
    })
  }

  genderSelector(event:any){
    this.gender=event
  
  }

  // seatSelector(){
  //   this.selectSeats=false
  //   this.seatBooked=false;
  //   // this.fareRs=this.busDetail.fareRs*this.totalSeat;
    
  //   if (this.totalSeat<this.count) {
  //     this.passengerList=['']
  //     this.count=0
  //   }
  // }
}
