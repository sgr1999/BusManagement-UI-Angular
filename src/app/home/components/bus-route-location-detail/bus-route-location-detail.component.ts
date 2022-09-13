import { CityService } from 'src/app/services/city/city.service';
import { BusRouteLocationDetailService } from './../../../services/busRouteLocationDetail/bus-route-location-detail.service';
import { City } from './../addcity/addcity.component';
import { BusRouteBusDetailService } from './../../../services/busRouteBusDetail/bus-route-bus-detail.service';
import { BusRouteBusDetail } from './../bus-route-location/bus-route-location.component';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';


export interface BusRouteLocationDetail{
  source:string,
  destination:string,
  sourceCity:string,
  destinationCity:string,
  busRouteBusDetailId:BusRouteBusDetail,
  cityId:City,
  departureTime:string,
  arrivalTime:string,
  routeSequence:number,
  bookingAllowed:string,
  fareRs:number
}

@Component({
  selector: 'app-bus-route-location-detail',
  templateUrl: './bus-route-location-detail.component.html',
  styleUrls: ['./bus-route-location-detail.component.css']
})
export class BusRouteLocationDetailComponent implements OnInit {

 
  source!:string;
  destination!:string;

  bookingAllowed!:string;
  cityName!:string;
  

  form:boolean=false
  sequenceUnique:boolean=false

  citys:City[]=[];

  selectAllowed=[
    {value:"Yes"},
    {value:"No"}
  ]

  busRouteBusDetail!:BusRouteBusDetail;

  userForm!:FormGroup;
  listData:any;

  data=[{
    cityName:'',
    arrivalTime:'',
    routeSequence:'',
    bookingAllowed:''
  }]
 
    constructor(private snack:MatSnackBar ,private fb:FormBuilder, private busRouteBusDetailService:BusRouteBusDetailService, private busRouteLocationDetailService:BusRouteLocationDetailService,
      private cityService:CityService) { 
      this.listData=[];

      this.userForm = this.fb.group({
        cityName:['',Validators.compose([Validators.required])],
        arrivalTime:['', Validators.required],
        routeSequence:['',Validators.required],
        bookingAllowed:['',Validators.required],
        fareRs:['',Validators.required]
      })

      

    }
  
    ngOnInit(): void {
      
      this.getCityList()
      this.busRouteBusDetail=this.busRouteBusDetailService.getBusRouteBusDetail();
      this.source=this.busRouteBusDetailService.getSource()
      this.destination=this.busRouteBusDetailService.getDestination()
    }

    c:number=0


    addItem(){
      this.form=true
    
      if ( this.cityName==null ||  this.bookingAllowed==null || this.userForm.get('arrivalTime')?.value=='' || this.userForm.get('routeSequence')?.value==''
      ||this.userForm.get('fareRs')?.value=='') {
        return;
      }



      this.data.forEach(e=>{
        if (e.routeSequence==this.userForm.get('routeSequence')?.value) {
          console.log("route se")
          this.sequenceUnique=true
          return;
        }
        else{
          this.sequenceUnique=false
        }
      })

      if (this.sequenceUnique==false) {
        
        this.data.push(this.userForm.value)
        this.listData.push(this.userForm.value);
      }
      console.log(this.userForm.value)
      console.log(this.listData)
      console.log(this.data)
     
    }

    removeItem(bus:any){
      this.listData.forEach((value:any,index:any)=>{
        if (value==bus) {
          this.listData.splice(index,1)
          this.data.splice(index+1,1)
        }
      })
    }

    submitLocation(){

      this.busRouteLocationDetailService.addBusRouteBookingLocation(this.listData,this.busRouteBusDetail.busRouteBusDetailId).subscribe(
        response=>{
          console.log(response)
          this.snack.open("..!!","OK",{
            duration:4000,
            verticalPosition:'top',
            horizontalPosition:'center',
            
          })
        },
        error=>{
          console.log(error)
        }
      )
    }
    
    submitBusDepo(){

      // if (this.busRouteLocation.source=="") {
      //   this.snack.open("Source field can not be empty..!!","OK",{duration:4000,verticalPosition:'top',horizontalPosition:'center'})
      //   return;
      // }

      // if (this.busRouteLocation.destination=="") {
      //   this.snack.open("Destination field can not be empty..!!","OK",{duration:4000,verticalPosition:'top',horizontalPosition:'center'})
      //   return;
      // }

      // if (this.busRouteLocation.source==null ||this.busRouteLocation.source==""
      //       || this.busRouteLocation.destination==null  || this.busRouteLocation.destination=="" ) {
      //   this.snack.open("Fields can not be empty..!!","OK",{
      //     duration:4000,
      //     verticalPosition:'top', 
      //     horizontalPosition:'center'
      //   })
      //   return;
      // }
      
      // this.busDepoRouteService.addBusDepoRoute(this.busDepoRoute).subscribe(
      //   response=>{
      //     console.log(response)
      //     window.location.href='/home/busDepoRoute'
      //     this.snack.open("Saved Successfully..!!","OK",{
      //       duration:4000,
      //       verticalPosition:'top',
      //       horizontalPosition:'center'
      //     })
      //   },
      //   error=>{
      //     console.log(error)
      //     this.snack.open("Something went wrong..!!","OK",{
      //       duration:4000,
      //       verticalPosition:'top',
      //       horizontalPosition:'center',
            
      //     })
      //   }
      // )
    }
  
    getCityList(){
      this.cityService.getCityList().subscribe(
        response=>{
          this.citys=response
        },
        error=>{
          console.log(error)
        }
      )
    }


    citySelector(event:any){
      this.cityName=event;
    }
  
    allowedSelector(event:any){
      this.bookingAllowed=event
    }



}
