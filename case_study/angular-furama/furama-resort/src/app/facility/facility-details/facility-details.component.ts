import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../facility.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Facility} from "../facility";

@Component({
  selector: 'app-facility-details',
  templateUrl: './facility-details.component.html',
  styleUrls: ['./facility-details.component.css']
})
export class FacilityDetailsComponent implements OnInit {
  facility = {} as Facility;
  private facilities: Facility[];


  constructor(private facilityService:FacilityService, private  activatedRoute:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const facilityIdFromRoute = routeParams.get('facilityId');
    this.getFacilityDetail(facilityIdFromRoute);

  }

  getFacilityDetail(id:string){
    return this.facilityService.findById(id).subscribe(facility => {
        this.facility = facility;
    }, error => {
      this.router.navigate(['/error']);
    });
  }

  compareFacilityTypeByID(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }
  compareRentTypeByID(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }

}
