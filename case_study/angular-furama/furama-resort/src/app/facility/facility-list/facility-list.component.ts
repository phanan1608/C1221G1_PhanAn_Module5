import {Component, OnInit} from '@angular/core';
import {Facility} from "../facility";
import {FacilityService} from "../facility.service";
import {FacilityTypeService} from "../facility-type.service";
import {FacilityType} from "../facility-type";

declare let threeDotForFacility: any;

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[];
  nameToDelete: string;
  idToDelete: string;
  p: number = 1;
  facilityTypes: FacilityType[];

  constructor(private facilityService: FacilityService, private facilityTypeService:FacilityTypeService) {
  }


  ngOnInit(): void {
    new threeDotForFacility();
    this.getAll();
    this.getFacilityTypeList()
  }

  getAll() {
    this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    });
  }

  showMessage(name: string, id: string) {
    this.nameToDelete = name;
    this.idToDelete = id;
  }

  deleteModal() {
    this.facilityService.deleteFacility(this.idToDelete).subscribe(() => {
      this.facilityService.deleteFacility(this.idToDelete);
      this.ngOnInit();
    });
    this.ngOnInit();
  }

  getFacilityTypeList(){
    this.facilityTypeService.getAll().subscribe(facilityTypes => {
      this.facilityTypes = facilityTypes;
    })
  }

  searchFacility(name: HTMLInputElement, cost: HTMLInputElement, facilityType: HTMLSelectElement) {
    console.log(name.value);
    console.log(cost.value);
    console.log(facilityType.value);
    this.facilityService.search(name.value,cost.value,facilityType.value).subscribe(facilities =>{
      this.facilities = facilities
    })
  }
}
