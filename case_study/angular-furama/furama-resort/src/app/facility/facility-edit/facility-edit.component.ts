import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityType} from "../facility-type";
import {facilityTypes} from "../facility-type-data";
import {Facility} from "../facility";
import {ActivatedRoute, Router} from "@angular/router";
import {facilities} from "../facility-data";
import {rentTypes} from "../rent-type-data";
import {FacilityService} from "../facility.service";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facility = {} as Facility;
  facilities: Facility[];
  villa: boolean = true;
  house: boolean = true;
  room: boolean = true;
  selectedValue: any = 'null';
  facilityTypes = facilityTypes;
  rentTypes = rentTypes;
  facilityForm: FormGroup;
  submit:boolean = false;


  constructor(private facilityService:FacilityService, private  activatedRoute:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit(): void {
    this.facilities = this.facilityService.getFacilityList();

    const routeParams = this.activatedRoute.snapshot.paramMap;
    const facilityIdFromRoute = routeParams.get('facilityId');
    this.facility = this.facilities.find(facility => facility.id === facilityIdFromRoute);

    if (this.facility === undefined) {
      this.router.navigate(['/error']);
    }
    this.changeValue(this.facility.facilityType);

    this.facilityForm = new FormGroup({
      id: new FormControl(this.facility.id, [Validators.required, Validators.pattern("^DV-\\d{4}$")]),
      name: new FormControl(this.facility.name, [Validators.required, Validators.pattern("^([A-Z][a-z]*)+(\\s[A-Z][a-z]*)*$")]),
      area: new FormControl(this.facility.area, [Validators.required, Validators.pattern("^\\+*\\d+$")]),
      cost: new FormControl(this.facility.cost, [Validators.required, Validators.pattern("^\\+*\\d+$")]),
      image: new FormControl(this.facility.image, [Validators.required]),
      maxPeople: new FormControl(this.facility.maxPeople, [Validators.required, Validators.pattern("^\\+*\\d+$")]),
      standardRoom: new FormControl(this.facility.standardRoom, [Validators.required]),
      rentType: new FormControl(this.facility.rentType, [Validators.required]),
      facilityType: new FormControl(this.facility.facilityType, [Validators.required]),
      numberOfFloors: new FormControl(this.facility.numberOfFloors,),
      descriptionOtherConvenience: new FormControl(this.facility.descriptionOtherConvenience,),
      poolArea: new FormControl(this.facility.poolArea, ),
    })
  }

  compareFacilityTypeByID(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }
  compareRentTypeByID(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }





  changeValue(value: FacilityType) {
    console.log(value);
    this.selectedValue = value.id;
    switch (this.selectedValue) {
      case 1:
        this.villa = false;
        this.house = true;
        this.room = true;
        break;
      case 2:
        this.villa = true;
        this.house = false;
        this.room = true;
        break;
      case 3:
        this.villa = true;
        this.house = true;
        this.room = false;
        break;
      default:
        this.villa = true;
        this.house = true;
        this.room = true;
    }
  }

  onSubmit() {
    console.log(this.facilityForm.value);
    this.submit = true;
    if(this.facilityForm.valid){
      this.submit = false;
      this.facilityService.editFacility(this.facilityForm.value);
      this.router.navigate(['/facility/list']);
    }
  }
}
