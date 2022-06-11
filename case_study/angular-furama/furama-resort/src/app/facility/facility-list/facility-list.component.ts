import { Component, OnInit } from '@angular/core';
import {facilities} from "../../../assets/data/facility";
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility-service";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[];

  constructor(private facilityService: FacilityService) { }


  ngOnInit(): void {
    this.getFacilityLits()
  }

  private getFacilityLits(){
    this.facilities = this.facilityService.getFacilityList()
  }

}
