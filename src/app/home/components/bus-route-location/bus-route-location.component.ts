import { BusDetail } from './../bus-detail/bus-detail.component';
import { BusRouteBusDetailService } from './../../../services/busRouteBusDetail/bus-route-bus-detail.service';
import { BusDepoRouteService } from 'src/app/services/busDepoRoute/bus-depo-route.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SourceDestinationService } from 'src/app/services/sourceDestination/source-destination.service';
import { BusDepoRoute } from '../bus-depo-route/bus-depo-route.component';
import { SourceDestination } from '../source-destination/source-destination.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export interface BusRouteBusDetail{
  busRouteBusDetailId:number;
  busDepoRouteId:BusDepoRoute;
  busDetailId:BusDetail;
  busDepartureTime:string;
  busArrivalTime:string;
}

@Component({
  selector: 'app-bus-route-location',
  templateUrl: './bus-route-location.component.html',
  styleUrls: ['./bus-route-location.component.css']
})
export class BusRouteLocationComponent implements OnInit {
  
//   displayedColumns: string[] = ['srno', 'time', 'busType', 'route','action'];
// dataSource = ELEMENT_DATA;

  busRouteLocation={
    source:'',
    destination:'',
  }

  busRouteBusDetails:BusRouteBusDetail[]=[]
  busDepoRoutes:BusDepoRoute[]=[];

  sources: string[]=[];
  destinations:string[]=[]

  searched:boolean=false
  a:number[]=[1,2,3];

  displayedColumns: string[] = ['srno', 'time', 'busType', 'route','action'];
  dataSource = this.busRouteBusDetails;
 
  
    constructor(private snack:MatSnackBar ,private busRouteBusDetailService:BusRouteBusDetailService, private busDepoRouteService:BusDepoRouteService) { }
  
    ngOnInit(): void {
      this.getBusDepoRouteList()
      
    }

    addBusDetail(busRouteBusDetail:BusRouteBusDetail){
        this.busRouteBusDetailService.setBusRouteBusDetail(busRouteBusDetail);
        this.busRouteBusDetailService.setSource(this.busRouteLocation.source)
        this.busRouteBusDetailService.setDestination(this.busRouteLocation.destination)
    }
  
    submitBusLocation(){

      if (this.busRouteLocation.source=="") {
        this.snack.open("Source field can not be empty..!!","OK",{duration:4000,verticalPosition:'top',horizontalPosition:'center'})
        return;
      }

      if (this.busRouteLocation.destination=="") {
        this.snack.open("Destination field can not be empty..!!","OK",{duration:4000,verticalPosition:'top',horizontalPosition:'center'})
        return;
      }
      
      this.busRouteBusDetailService.getBusRouteBusDetailBySource(this.busRouteLocation.source,this.busRouteLocation.destination).subscribe(
        response=>{
          // window.location.href='/home/busDepoRoute'
          this.busRouteBusDetails=response
          console.log(this.busRouteBusDetails)
          this.searched=true
          
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
  
    
    sourceSelection(event:any){
      this.busRouteLocation.source=event
     
    }
    destinationSelection(event:any){
      this.busRouteLocation.destination=event
     
    }
  
    getBusDepoRouteList(){
      this.busDepoRouteService.getBusDepoRouteList().subscribe(
        response=>{
        
          this.busDepoRoutes=response
          console.log(this.busDepoRoutes)

         this.sources=[...new Set(this.busDepoRoutes.map(d=>d.source))]
         this.destinations=[...new Set(this.busDepoRoutes.map(d=>d.destination))]
        
        },
        error=>{
          console.log(error)
        }
      )
    }

}
