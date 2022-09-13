import { MenuItem } from 'primeng/api';
import { SourceDestinationService } from './../../../services/sourceDestination/source-destination.service';
import { BusDepoRouteService } from './../../../services/busDepoRoute/bus-depo-route.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BusDepoService } from 'src/app/services/busDepo/bus-depo.service';
import { CityService } from 'src/app/services/city/city.service';
import { DistrictService } from 'src/app/services/district/district.service';
import { StateService } from 'src/app/services/state/state.service';
import { City, District, State } from '../addcity/addcity.component';
import { BusDepo } from '../bus-depo/bus-depo.component';
import { SourceDestination } from '../source-destination/source-destination.component';

export interface BusDepoRoute{
  totalKm:string;
  source:string;
  destination:string;
  busDepoName:string;
}

@Component({
  selector: 'app-bus-depo-route',
  templateUrl: './bus-depo-route.component.html',
  styleUrls: ['./bus-depo-route.component.css']
})
export class BusDepoRouteComponent implements OnInit {


  busDepoRoute={
    totalKm:'',
    busDepartureTime:'',
    busArrivalTime:'',
    busDepoName:'',
    source:'',
    destination:''
  }


  busDepoRoutes:BusDepoRoute[]=[];

    // busDepo!:BusDepo;
    busDepos:BusDepo[]=[]
  
    citys:City[]=[];

    sourceDestination:SourceDestination[]=[]
  
  
    constructor(private snack:MatSnackBar, private busDepoRouteService:BusDepoRouteService ,private busDepoService:BusDepoService, private cityService:CityService, private sourceDestinationService:SourceDestinationService) { }
  
    ngOnInit(): void {
      this.getCityList()
      this.getBusDepoList()
      this.getSourceDestinationList()
      this.getBusDepoRouteList()
    }
  
    submitBusDepo(){

      if (this.busDepoRoute.busDepoName=="") {
        this.snack.open("Bus Depo Name can not be empty..!!","OK",{duration:4000,verticalPosition:'top',horizontalPosition:'center'})
        return;
      }

      if (this.busDepoRoute.source=="") {
        this.snack.open("Source field can not be empty..!!","OK",{duration:4000,verticalPosition:'top',horizontalPosition:'center'})
        return;
      }

      if (this.busDepoRoute.destination=="") {
        this.snack.open("Destination field can not be empty..!!","OK",{duration:4000,verticalPosition:'top',horizontalPosition:'center'})
        return;
      }

      if (this.busDepoRoute.totalKm=="") {
        this.snack.open("Enter Total Km it can not be empty..!!","OK",{duration:4000,verticalPosition:'top',horizontalPosition:'center'})
        return;
      }

     
     
      this.busDepoRouteService.addBusDepoRoute(this.busDepoRoute).subscribe(
        response=>{
          console.log(response)
          window.location.href='/home/busDepoRoute'
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
  
         this.busDepoRoutes.forEach(e=>{
          if (e.source==this.busDepoRoute.source && e.destination==this.busDepoRoute.destination && e.busDepoName==this.busDepoRoute.busDepoName) {
            this.snack.open("Source Destination alredy does exist with this Depo..!!","OK",{
              duration:5000,
              verticalPosition:'top',
              horizontalPosition:'center', 
            })
            console.log(e)
          }
         })
        }
      )
    }
  
    busDepoSelection(event:any){
      this.busDepoRoute.busDepoName=event  
    }
  
    
    sourceSelection(event:any){
      this.busDepoRoute.source=event
     
    }
    destinationSelection(event:any){
      this.busDepoRoute.destination=event
     
    }
  
    getBusDepoRouteList(){
      this.busDepoRouteService.getBusDepoRouteList().subscribe(
        response=>{
          this.busDepoRoutes=response
          console.log(this.busDepoRoutes)
          console.log(response)
        },
        error=>{
          console.log(error)
        }
      )
    }
  
    getBusDepoList(){
      this.busDepoService.getBusDepoList().subscribe(
        response=>{
          this.busDepos=response;
          console.log(this.busDepos)
        },
        error=>{
          console.log(error)
        }
      )
    }

    getSourceDestinationList(){
      this.sourceDestinationService.getSourceDestinationList().subscribe(
        response=>{
          this.sourceDestination=response
          console.log(response)
        },
        error=>{
          console.log(error)
        }
      )
    }
  
    getCityList(){
      this.cityService.getCityList().subscribe(
        response=>{
          this.citys=response
          console.log(response)
        },
        error=>{
          console.log(error)
        }
      )
    }

}
