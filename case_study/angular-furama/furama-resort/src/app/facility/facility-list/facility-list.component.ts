import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility-service";

declare let threeDotForFacility: any;
declare let niceSelect: any;

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[]= this.facilityService.getFacilityList();

  constructor(private facilityService: FacilityService) { }


  ngOnInit(): void {
    new threeDotForFacility();
    // new niceSelect();
  }


}
