import { Router } from '@angular/router';
import { BusBookingDetailService } from './../../../services/busBookingDetail/bus-booking-detail.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BusRouteBusDetailService } from './../../../services/busRouteBusDetail/bus-route-bus-detail.service';
import { BusRouteLocationDetailService } from './../../../services/busRouteLocationDetail/bus-route-location-detail.service';
import { BusTypeService } from 'src/app/services/busType/bus-type.service';
import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { BusRouteLocationDetail } from '../bus-route-location-detail/bus-route-location-detail.component';


export interface BusBookingDetail{

  paymentType:string;
  transactionId:string;
}
@Component({
  selector: 'app-bus-booking-detail',
  templateUrl: './bus-booking-detail.component.html',
  styleUrls: ['./bus-booking-detail.component.css']
})
export class BusBookingDetailComponent implements OnInit {

  busBookingDetail={
    busType:'',
    travelingDate:'',
    source:'',
    destination:''
  }

  sourceBusDetail:any;
  destinationBusDetail:any;
  
  busLocation:BusRouteLocationDetail[]=[]
  sourceList:BusRouteLocationDetail[]=[]
  sourceList1:any
  destinationList:any
  busDetail:BusRouteLocationDetail[]=[]

  searched:boolean=false;
  progressBar:boolean=false;

  constructor(private snack:MatSnackBar,private busTypeService:BusTypeService, private busRouteLocationDetailService:BusRouteLocationDetailService, 
    private busRouteBusDetailService:BusRouteBusDetailService, private busBookingDetailService:BusBookingDetailService,
    private router:Router) { 

    this.sourceList1=[]
    this.destinationList=[]
    this.sourceBusDetail=[]
    this.destinationBusDetail=[]
  }

  ngOnInit(): void {
    this.getBusLocationList()
    this.busBookingDetail.busType=this.busTypeService.getBusType()
    console.log(this.busBookingDetail.busType)

    if (this.busBookingDetail.busType==null) {
      window.location.href='/home/busBooking'
    }
  }
  
  submitBusBookingDetail(){
    this.progressBar=true
    
   
    this.busBookingDetail.travelingDate =this.busBookingDetail.travelingDate.toString().substring(this.busBookingDetail.travelingDate.length,15)


    if (this.busBookingDetail.source=='') {
      this.snack.open("Select Source..!!","OK",{
        duration:4000,
        verticalPosition:'top',
        horizontalPosition:'center'
      })
      this.progressBar=false
      return;
    }

    if (this.busBookingDetail.destination=='') {
      this.snack.open("Select Destination..!!","OK",{
        duration:4000,
        verticalPosition:'top',
        horizontalPosition:'center'
      })
      this.progressBar=false
      return;
    }

    if (this.busBookingDetail.travelingDate=='') {
      this.snack.open("Select Date..!!","OK",{
        duration:4000,
        verticalPosition:'top',
        horizontalPosition:'center'
      })
      this.progressBar=false
      return;
    }
    
    this.busRouteLocationDetailService.getBusRouteBusDetailBySourceList(this.busBookingDetail.source,this.busBookingDetail.destination,this.busBookingDetail.busType).subscribe(
      response=>{
        console.log(response)
        
        setTimeout(()=>{
          this.busDetail=response
          this.progressBar=false
          this.searched=true
        },2300)
      
      },
      error=>{
        console.log(error)
        setTimeout(()=>{
          this.progressBar=false
          this.searched=false
          this.snack.open("Bus Not Available..!!","OK",{
            duration:5000,
            verticalPosition:'top',
            horizontalPosition:'center',
            
          })
        },2000)

      }
    )
  
  }

  book(bus:BusRouteLocationDetail){
    this.busBookingDetailService.setBusBookingDetail(bus);
    this.busBookingDetailService.setBookingDate(this.busBookingDetail.travelingDate)

    if (bus.busRouteBusDetailId.busDetailId.busTypeId.busType=="SHIVNERI SLEEPER") {
     
      this.router.navigate(['/home/sleeper'])
    }
    else{
      this.router.navigate(['/home/seater'])
    }
  }


  sourceSelection(event:any){
    this.busBookingDetail.source=event
  }

  destinationSelection(event:any){
    this.busBookingDetail.destination=event
  }

  getBusRouteBusDetailById(id:number){
    this.busRouteBusDetailService.getBusRouteBusDetailById(id).subscribe(
      response=>{
        console.log(response)
      },error=>{
        console.log(error)
      }
    )
  }

  getBusLocationList(){
    this.busRouteLocationDetailService.getBusRouteLocationDetailList().subscribe(
      response=>{
        
        this.busLocation=response
       

        this.busLocation.forEach(e=>{
          if (e.bookingAllowed=="Yes") {
            this.sourceList.push(e)
           this.sourceList1= [...new Set(this.sourceList.map(s=>s.cityId.cityName))];
          }
        })

        this.destinationList=[...new Set(this.busLocation.map(d=>d.cityId.cityName))]
        
      },
      error=>{
        console.log(error)
      }
    )
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };


  backButton(){
    this.searched=false
  }
}
