import { BusDepo } from './../bus-depo/bus-depo.component';
import { BusDepoService } from './../../../services/busDepo/bus-depo.service';
import { BusTypeService } from './../../../services/busType/bus-type.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

interface BusTypeSelect{
  value:string;
  viewValue:string
}

export interface BusType{
  busType:string
}

@Component({
  selector: 'app-bus-type',
  templateUrl: './bus-type.component.html',
  styleUrls: ['./bus-type.component.css']
})
export class BusTypeComponent implements OnInit {

  busType!:string;
  busDepoName!:string;

  busDepos:BusDepo[]=[];


  constructor(private snack:MatSnackBar, private busTypeService:BusTypeService, private busDepoService:BusDepoService) { }

  ngOnInit(): void {
    this.getBusDepoList()
  }

  busTypeSelect:BusTypeSelect[]=[
    {value:'ALL',viewValue:'ALL'},
    {value:'SHIVNERI',viewValue:'SHIVNERI'},
    {value:'SHIVNERI SLEEPER',viewValue:'SHIVNERI SLEEPER'},
    {value:'SHIVSHAHI',viewValue:'SHIVSHAHI'}
  ]

  submitBusType(){

    if (this.busDepoName=="", this.busDepoName==null) {
      this.snack.open("Bus Depo name can not be empty..!!","OK",{duration:4000, verticalPosition:"top",horizontalPosition:"center"})
      return;
    }
    if (this.busType=="", this.busType==null) {
      this.snack.open("Bus Type can not be empty..!!","OK",{duration:4000, verticalPosition:"top",horizontalPosition:"center"})
      return;
    }

   this.busTypeService.addBusType(this.busType,this.busDepoName).subscribe(
     response=>{
       console.log(response);
       window.location.href="/home/busType"
       this.snack.open("Saved Successfully..!!","OK",{duration:4000, verticalPosition:"top",horizontalPosition:"center"})
     },
     error=>{
       console.log(error);
       this.snack.open("Something went wrong..!!","OK",{duration:4000, verticalPosition:"top",horizontalPosition:"center"})
    
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

  busDepoSelect(event:any){
    this.busDepoName=event;
    console.log(this.busDepoName)
  }
}
