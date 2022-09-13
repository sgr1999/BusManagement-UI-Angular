import { MenuItem } from 'primeng/api';
import { BusDepoRoute } from './../bus-depo-route/bus-depo-route.component';
import { BusRouteBusDetailService } from './../../../services/busRouteBusDetail/bus-route-bus-detail.service';
import { BusDetailService } from './../../../services/busDetail/bus-detail.service';
import { BusDetail } from 'src/app/home/components/bus-detail/bus-detail.component';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BusDepoService } from 'src/app/services/busDepo/bus-depo.service';
import { BusDepoRouteService } from 'src/app/services/busDepoRoute/bus-depo-route.service';
import { CityService } from 'src/app/services/city/city.service';
import { SourceDestinationService } from 'src/app/services/sourceDestination/source-destination.service';
import { City } from '../addcity/addcity.component';
import { BusDepo } from '../bus-depo/bus-depo.component';
import { SourceDestination } from '../source-destination/source-destination.component';

@Component({
  selector: 'app-bus-route-bus-detail',
  templateUrl: './bus-route-bus-detail.component.html',
  styleUrls: ['./bus-route-bus-detail.component.css']
})
export class BusRouteBusDetailComponent implements OnInit {

  busRouteBusDetail={
    source:'',
    destination:'',
    busNumber:'',
    busDepoName:'',
    busDepartureTime:'',
    busArrivalTime:''
  }

    busDetails:BusDetail[]=[]

    busDepos:BusDepo[]=[]

    busDepoRoutes:BusDepoRoute[]=[];

    sources: string[]=[];
    destinations:string[]=[]
    busDepoNames:string[]=[]
  
  
    constructor(private snack:MatSnackBar , private busDepoService:BusDepoService,private busDepoRouteService:BusDepoRouteService,private busRouteBusDetailService:BusRouteBusDetailService,private busDetailService:BusDetailService) { }
  
    ngOnInit(): void {
      this.getBusDetailList()
      this.getBusDepoRouteList()
      this.getBusDepoList()
    }
  
    submitBusDepo(){

      if (this.busRouteBusDetail.source=="") {
        this.snack.open("Source field can not be empty..!!","OK",{duration:4000,verticalPosition:'top',horizontalPosition:'center'})
        return;
      }

      if (this.busRouteBusDetail.destination=="") {
        this.snack.open("Destination field can not be empty..!!","OK",{duration:4000,verticalPosition:'top',horizontalPosition:'center'})
        return;
      }

      if (this.busRouteBusDetail.busNumber=="") {
        this.snack.open("Bus Number can not be empty..!!","OK",{duration:4000,verticalPosition:'top',horizontalPosition:'center'})
        return;
      }

      if (this.busRouteBusDetail.busDepartureTime=="") {
        this.snack.open("Select departure time it can not be empty..!!","OK",{duration:4000,verticalPosition:'top',horizontalPosition:'center'})
        return;
      }

      if (this.busRouteBusDetail.busArrivalTime=="") {
        this.snack.open("Select arrival time it can not be empty..!!","OK",{duration:4000,verticalPosition:'top',horizontalPosition:'center'})
        return;
      }
  
     
      
      this.busRouteBusDetailService.addBusRouteBusDetail(this.busRouteBusDetail).subscribe(
        response=>{
          console.log(response)
          window.location.href='/home/busRouteBusDetail'
          this.snack.open("Saved Successfully..!!","OK",{
            duration:4000,
            verticalPosition:'top',
            horizontalPosition:'center'
          })
        },
        error=>{
          console.log(error)
          this.snack.open("Something went wrong..!!","OK",{
            duration:4000,
            verticalPosition:'top',
            horizontalPosition:'center',
            
          })
        }
      )
    }
  
    busNumberSelection(event:any){
      this.busRouteBusDetail.busNumber=event  
    }
  
    
    sourceSelection(event:any){
      this.busRouteBusDetail.source=event
     
    }
    destinationSelection(event:any){
      this.busRouteBusDetail.destination=event
     
    }

    busDepoNameSelection(event:any){
      this.busRouteBusDetail.busDepoName=event
    }

    getBusDepoRouteList(){
      this.busDepoRouteService.getBusDepoRouteList().subscribe(
        response=>{
        
          this.busDepoRoutes=response
          console.log(this.busDepoRoutes)

         this.sources=[...new Set(this.busDepoRoutes.map(d=>d.source))]
         this.destinations=[...new Set(this.busDepoRoutes.map(d=>d.destination))]
         this.busDepoNames=[...new Set(this.busDepoRoutes.map(d=>d.busDepoName))]
        
        },
        error=>{
          console.log(error)
        }
      )
    }

   

   
  
    getBusDetailList(){
      this.busDetailService.getBusDetailList().subscribe(
        response=>{
          this.busDetails=response;
          console.log(this.busDetails)
        },
        error=>{
          console.log(error)
        }
      )
    }

  
    getBusDepoList(){
      this.busDepoService.getBusDepoList1().subscribe(
        response=>{
          this.busDepos=response
        }
      )
    }

}
