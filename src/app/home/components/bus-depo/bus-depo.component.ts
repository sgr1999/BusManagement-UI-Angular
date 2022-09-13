import { BusDepoService } from './../../../services/busDepo/bus-depo.service';
import { State, District, City } from 'src/app/home/components/addcity/addcity.component';
import { Component, OnInit } from '@angular/core';
import { SourceDestination } from '../source-destination/source-destination.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StateService } from 'src/app/services/state/state.service';
import { DistrictService } from 'src/app/services/district/district.service';
import { CityService } from 'src/app/services/city/city.service';
import { SourceDestinationService } from 'src/app/services/sourceDestination/source-destination.service';

export interface BusDepo{
  busDepoName:string;
  busDepoAddress:string;
  

}

@Component({
  selector: 'app-bus-depo',
  templateUrl: './bus-depo.component.html',
  styleUrls: ['./bus-depo.component.css']
})
export class BusDepoComponent implements OnInit {

busDepo={
  busDepoName:'',
  busDepoAddress:''
} 
  // busDepo!:BusDepo;
  busDepos:BusDepo[]=[]

  states:State[]=[];
  districts:District[]=[];
  districts1:District[]=[];
  citys:City[]=[];
  citys1:City[]=[];
  sourceDestination:SourceDestination[]=[];

  stateName!:string;
  districtName!:string;
  cityName!:string;
  source!:any;

  constructor(private snack:MatSnackBar,private busDepoService:BusDepoService, private stateService:StateService, private districtService:DistrictService, private cityService:CityService, private sourceService:SourceDestinationService) { }

  ngOnInit(): void {
    this.getStateList()
    this.getDistrictList()
    this.getCityList()
    this.getBusDepoList()
  }

  submitBusDepo(){

    if (this.stateName==null || this.stateName=="" || this.districtName==null || this.districtName=="" || this.cityName==null || this.cityName==""
          || this.busDepo.busDepoName==null || this.busDepo.busDepoAddress==null || this.busDepo.busDepoAddress=="" || this.busDepo.busDepoName=="") {
      this.snack.open("Fields can not be empty..!!","OK",{
        duration:4000,
        verticalPosition:'top', 
        horizontalPosition:'center'
      })
      return;
    }

    
    this.busDepoService.addBusDepo(this.busDepo,this.stateName,this.districtName,this.cityName).subscribe(
      response=>{
        console.log(response)
        window.location.href='/home/busDepo'
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

        this.busDepos.forEach(e=>{
          console.log(e.busDepoName)
          if (e.busDepoName==this.busDepo.busDepoName) {
            this.snack.open(e.busDepoName+" Depo alredy exists..!!","OK",{
              duration:4000,
              verticalPosition:'top',
              horizontalPosition:'center',
              
            })
          }
        })
      }
    )
  }

  stateSelection(event:any){
    this.stateName=event
    this.districts1= this.districts.filter(e=>e.stateId.stateName==event)
    console.log(this.districts1)

  }

  districtSelection(event:any){
    this.districtName=event
    this.citys1 = this.citys.filter(e=>e.districtId.districtName==event)
    console.log(this.citys1)
  }

  citySelection(event:any){
    this.cityName=event
    console.log(this.cityName)
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

  getStateList(){

    this.stateService.getStateList().subscribe(
      response=>{
        this.states=response
        console.log(response)
      },
      error=>{
        console.log(error)
      }
    )
  }

  getDistrictList(){
    this.districtService.getDistrictList().subscribe(
      response=>{
        this.districts=response
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
