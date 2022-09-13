import { Validators } from '@angular/forms';
import { DistrictService } from './../../../services/district/district.service';
import { StateService } from './../../../services/state/state.service';
import { MenuItem } from 'primeng/api';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CityService } from './../../../services/city/city.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface State{
  stateName:string;
  stateCode:string;
}

export interface District{
  districtName:string;
  districtCode:number;
  stateId:State
}

export interface City{
  cityName:string;
  cityCode:number;
  districtId:District
}

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit {

  state={
    stateName:'',
    stateCode:''
  }

  district={
    districtName:'',
    districtCode:''
  }

  city={
    cityName:'',
    cityCode:'',
  }
  
  states:State[]=[];
  districts:District[]=[];
  citys:City[]=[];

  checkState:boolean=false;

  sideBarOpen =true;
  count=0;

  districtSideBarOpen =true;
  count1=0;

  citySideBarOpen=true;
  count2=0;

  dStateName!:string;
  cDistrictName!:string;
  cStateName!:string;


  @Output() toggleStateForMe: EventEmitter<any>= new EventEmitter();

  constructor(private cityService:CityService, private snack:MatSnackBar, private stateService:StateService,
          private districtService:DistrictService) { }

  ngOnInit(): void {
    this.getStateList();
    this.getDistrictList();
    this.getCityList();
  }

  submitCity(){

  let name= this.city.cityName.substring(0,1).toUpperCase()+this.city.cityName.substring(1).toLowerCase();

  if (this.city.cityName==null || this.city.cityCode==null || this.cStateName==null || this.cDistrictName==null || this.city.cityName=="" || this.city.cityCode==""
      || this.cStateName=="" || this.cDistrictName=="" ) {
    this.snack.open("Fields Can Not be Empty","OK");
    return;
  }


    this.cityService.addCity(this.city, this.cStateName, this.cDistrictName).subscribe(
      response=>{
        console.log(response)
        this.snack.open("City added Successfully..!!","OK",{
          duration:5000,
          verticalPosition:'top',
          horizontalPosition:'center', 
        })
        window.location.href='/home/addCity'
      },
      error=>{
        console.log(error)
        this.snack.open("Something went wrong","OK",{
          duration:5000,
          verticalPosition:'top',
          horizontalPosition:'center', 
        });

        this.citys.forEach(e=>{
          if (e.cityName==name) {
            this.snack.open(name+" City Alredy Saved","OK",{
              duration:5000,
              verticalPosition:'top',
              horizontalPosition:'center', 
            })
          }
        })

      }
    )
  }

  submitState(){

    if (this.state.stateName==null && this.state.stateCode==null || this.state.stateName=="" && this.state.stateCode=="") {
      this.snack.open("Fields Can Not be Empty","OK",{
        duration:5000,
        verticalPosition:'top',
        horizontalPosition:'center', 
      });
      return;
    }

   this.cityService.addState(this.state).subscribe(
     (response)=>{
       console.log(response)
       this.snack.open("state added","OK",{
        duration:5000,
        verticalPosition:'top',
        horizontalPosition:'center', 
      })
       window.location.href='/home/addCity'
     },
     error=>{
       this.snack.open("Something went wrong","OK")
       this.states.forEach(e => {
         if (e.stateName==this.state.stateName) {
           this.snack.open(e.stateName+" State Already Saved","OK",{
            duration:5000,
            verticalPosition:'top',
            horizontalPosition:'center', 
          })
          }
          if (e.stateCode==this.state.stateCode) {
            this.snack.open(e.stateCode+" Of "+e.stateName+" State Code Alredy saved","OK",{
              duration:5000,
              verticalPosition:'top',
              horizontalPosition:'center', 
            })
          }
          return;
        });
        console.log(error)
     }
   )
  }


  submitDistrict(){

   var dname= this.district.districtName.substring(0,1).toUpperCase()+this.district.districtName.substring(1).toLowerCase();
    // var dcode= this.district.districtCode.
    if ((this.district.districtName==null || this.district.districtCode==null || this.dStateName==null) || (this.district.districtName=="" || this.district.districtCode=="" || this.dStateName=="")) {
      this.snack.open("Fields Can Not be Empty","OK",{
        duration:5000,
        verticalPosition:'top',
        horizontalPosition:'center', 
      });
      return;
    }

    this.districtService.addDistrict(this.district, this.dStateName).subscribe(
      response=>{
        console.log(response)
        this.snack.open("District added successfully..!!","OK",{
          duration:5000,
          verticalPosition:'top',
          horizontalPosition:'center', 
        })
        window.location.href='/home/addCity'
      },
      error=>{
        console.log(error);
        this.snack.open("Something went wrong","OK",{
          duration:5000,
          verticalPosition:'top',
          horizontalPosition:'center', 
        })

        console.log("dname ",dname)
        this.districts.forEach(e=>{
          console.log("ee ",e.districtName);
          if (e.districtName==dname) {
            this.snack.open(dname+" District Alredy Saved ","OK",{
              duration:5000,
              verticalPosition:'top',
              horizontalPosition:'center', 
            })
          }

          // if (e.districtCode==this.district.districtCode) {
            
          // }
        })
      }
    )
  }

  getStateList(): void{
    this.stateService.getStateList().subscribe(
      (response:State[])=>{
        this.states=response;
        console.log(response)
      },
      error=>{
        console.log(error)
      }
    )
  }

  getDistrictList():void{
    this.districtService.getDistrictList().subscribe(
      (response:District[])=>{
        console.log(response)
        this.districts=response;
      },
      error=>{
        console.log(error)
      }
    )
  }

  getCityList():void{
    this.cityService.getCityList().subscribe(
      (response:City[])=>{
        console.log(response);
        this.citys=response;
      },
      error=>{
        console.log(error)
      }
    )
  }

  stateSelection(event:any){
    this.cStateName=event;
    
  }

  stateSelection1(event:any){
    this.dStateName=event;
  }

  districtSelection(event:any){
    this.cDistrictName=event;
    console.log(this.cDistrictName)
  }

  toggleState(){
    this.toggleStateForMe.emit();
    if (this.count %2==0) {
      this.sideBarOpen=false;
    }else{
      this.sideBarOpen=true;
    }
    console.log(this.count)
    this.count++;
  }

  toggleDistrict(){
    this.toggleStateForMe.emit();
    if (this.count1 %2==0) {
      this.districtSideBarOpen=false;
    }else{
      this.districtSideBarOpen=true;
    }
    this.count1++;
  }

  toggleCity(){
    this.toggleStateForMe.emit();
    if (this.count2 %2==0) {
      this.citySideBarOpen=false;
    }else{
      this.citySideBarOpen=true;
    }
    this.count2++;
  }

  

}
