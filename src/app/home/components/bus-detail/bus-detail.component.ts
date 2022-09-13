import { BusDetailService } from './../../../services/busDetail/bus-detail.service';

import { BusType } from './../bus-type/bus-type.component';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BusDepoService } from 'src/app/services/busDepo/bus-depo.service';
import { BusTypeService } from 'src/app/services/busType/bus-type.service';
import { BusDepo } from '../bus-depo/bus-depo.component';

export interface BusDetail{
  busNumber:string;
  status:string;
  noOfSeat:number;
  busDepoId:BusDepo;
  busTypeId:BusType
}

@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.css']
})
export class BusDetailComponent implements OnInit {

  selectStatus=[
    {value:'Active'},
    {value:'InActive'},
  ]

  busDetail={
    busDepoName:'',
    busType:'',
    busNumber:'',
    noOfSeat:'',
    status:''
  }

  busDetails:BusDetail[]=[];

 

  busDepos:BusDepo[]=[];
  busTypes:BusType[]=[];

  constructor(private snack:MatSnackBar, private busTypeService:BusTypeService, private busDepoService:BusDepoService, private busDetailService:BusDetailService) { }

  ngOnInit(): void {
    this.getBusDepoList()
    this.getBusTypeList()
    this.getBusDetailList()
  }



  submitBusDetail(){

    if (this.busDetail.busDepoName=="" || this.busDetail.busDepoName==null) {
      this.snack.open("Bus Depo name can not be empty..!!","OK",{duration:4000, verticalPosition:"top",horizontalPosition:"center"})
      return;
    }
    if (this.busDetail.busType=="" || this.busDetail.busType==null) {
      this.snack.open("Bus Type can not be empty..!!","OK",{duration:4000, verticalPosition:"top",horizontalPosition:"center"})
      return;
    }
    if (this.busDetail.busNumber==null || this.busDetail.busNumber=="") {
      this.snack.open("Bus Number can not be empty..!!","OK",{duration:4000, verticalPosition:"top",horizontalPosition:"center"})
      return;
    }
    if (this.busDetail.noOfSeat==null || this.busDetail.noOfSeat=="") {
      this.snack.open("Enter No of seat it can not be empty..!!","OK",{duration:4000, verticalPosition:"top",horizontalPosition:"center"})
      return;
    }
    if (this.busDetail.status==null || this.busDetail.status=="") {
      this.snack.open("Status can not be empty..!!","OK",{duration:4000, verticalPosition:"top",horizontalPosition:"center"})
      return;
    }

   this.busDetailService.addBusDetail(this.busDetail).subscribe(
     response=>{
       console.log(response);
       window.location.href="/home/busDetail"
       this.snack.open("Saved Successfully..!!","OK",{duration:4000, verticalPosition:"top",horizontalPosition:"center"})
     },
     error=>{
       console.log(error);
       this.snack.open("Something went wrong..!!","OK",{duration:4000, verticalPosition:"top",horizontalPosition:"center"})
    
       this.busDetails.forEach(e=>{
         if (this.busDetail.busNumber==e.busNumber) {
          this.snack.open("Bus Number alredy exists..!!","OK",{duration:4000, verticalPosition:"top",horizontalPosition:"center"})
         }
       })
     }
   )
  }

  getBusDetailList(){
    this.busDetailService.getBusDetailList().subscribe(
      response=>{
        this.busDetails=response
        console.log(this.busDetails)
      },
      error=>{
        console.log(error)
      }
    )
  }

  getBusDepoList(){
    this.busDepoService.getBusDepoList().subscribe(
      (response)=>{
        this.busDepos=response;
        console.log(this.busDepos)
      },
      error=>{
        console.log(error)
      }
    )
  }

  getBusTypeList(){
    this.busTypeService.getBusTypeList().subscribe(
      response=>{
        console.log(response);
        this.busTypes=response
      }
    )
  }

  busDepoSelect(event:any){
    this.busDetail.busDepoName=event;
    console.log(this.busDetail.busDepoName)
  }

  busTypeSelector(event:any){
    this.busDetail.busType=event;
    console.log(this.busDetail.busType)
  }

  statusSelector(event:any){
    this.busDetail.status=event
    console.log(this.busDetail.status)
  }

}
