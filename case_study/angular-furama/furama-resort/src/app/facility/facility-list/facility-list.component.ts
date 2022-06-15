import { Component, OnInit } from '@angular/core';
import {Facility} from "../facility";
import {FacilityService} from "../facility.service";

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
  p: number = 1;

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
