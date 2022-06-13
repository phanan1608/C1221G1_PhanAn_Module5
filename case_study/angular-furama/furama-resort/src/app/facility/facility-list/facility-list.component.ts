import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility-service";

declare let threeDotForFacility: any;

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[];
  nameToDelete:string;
  idToDelete:string;

  constructor(private facilityService: FacilityService) { }


  ngOnInit(): void {
    new threeDotForFacility();
    this.facilities = this.facilityService.getFacilityList();
  }


  showMessage(name: string, id: string) {
      this.nameToDelete = name;
      this.idToDelete = id;
  }

  deleteModal() {
      this.facilityService.delete(this.idToDelete);
      this.ngOnInit();
  }
}
