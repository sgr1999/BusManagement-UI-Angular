import { BusDepoService } from 'src/app/services/busDepo/bus-depo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { State, District, City } from 'src/app/home/components/addcity/addcity.component';
import { SourceDestinationService } from './../../../services/sourceDestination/source-destination.service';
import { CityService } from './../../../services/city/city.service';
import { DistrictService } from './../../../services/district/district.service';
import { StateService } from './../../../services/state/state.service';
import { Component, OnInit } from '@angular/core';

export interface SourceDestination {

  stateName: string;
  districtName: string;
  cityName: string;
}

export interface BusDepoSource {
  busDepoName: string;
  busDepoAddress: string;
  stateId: State;
  districtId: District;
  cityId: City;
}

@Component({
  selector: 'app-source-destination',
  templateUrl: './source-destination.component.html',
  styleUrls: ['./source-destination.component.css']
})
export class SourceDestinationComponent implements OnInit {

  states: State[] = [];
  districts: District[] = [];
  districts1: District[] = [];
  citys: City[] = [];
  citys1: City[] = [];
  sourceDestination: SourceDestination[] = [];

  stateName!: string;
  districtName!: string;
  cityName!: string;
  source!: any;


  constructor(private snack: MatSnackBar, private busDepoService: BusDepoService, private stateService: StateService, private districtService: DistrictService, private cityService: CityService, private sourceService: SourceDestinationService) { }

  ngOnInit(): void {
    this.getStateList()
    this.getDistrictList()
    this.getCityList()
    this.getSourceDestinationList()
    
  }

  submitSource() {

    if (this.stateName == null || this.stateName == "" || this.districtName == null || this.districtName == "" || this.cityName == null || this.cityName == "") {
      this.snack.open("Fields can not be empty..!!", "OK", {
        duration: 4000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      })
      return;
    }

    this.sourceService.addSourceDestination(this.stateName, this.districtName, this.cityName, this.source).subscribe(
      response => {
        console.log(response)
        window.location.href = '/home/sourceDestination'
        this.snack.open("Saved Successfully..!!", "OK", {
          duration: 4000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        })
      },
      error => {
        console.log(error)
        this.snack.open("Something went wrong..!!", "OK", {
          duration: 4000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        })

        this.sourceDestination.forEach(e => {
          this.getSourceDestinationList();
          if (e.cityName == this.cityName) {
            this.snack.open(e.cityName + " City alredy exists..!!", "OK", {
              duration: 4000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            })
          }
        })
      }
    )
  }

  stateSelection(event: any) {
    this.stateName = event
    this.districts1 = this.districts.filter(e => e.stateId.stateName == event)
    console.log(this.districts1)

  }

  districtSelection(event: any) {
    this.districtName = event
    this.citys1 = this.citys.filter(e => e.districtId.districtName == event)
    console.log(this.citys1)
  }

  citySelection(event: any) {
    this.cityName = event
    console.log(this.cityName)
  }

  
  getSourceDestinationList() {
    this.sourceService.getSourceDestinationList().subscribe(
      (response: SourceDestination[]) => {
        this.sourceDestination = response
        console.log(this.sourceDestination)
      },
      error => {
        console.log(error)
      }
    )
  }

  getStateList() {

    this.stateService.getStateList().subscribe(
      response => {
        this.states = response
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

  getDistrictList() {
    this.districtService.getDistrictList().subscribe(
      response => {
        this.districts = response
      },
      error => {
        console.log(error)
      }
    )
  }

  getCityList() {
    this.cityService.getCityList().subscribe(
      response => {
        this.citys = response
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

}