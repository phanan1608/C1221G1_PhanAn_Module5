import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityType} from "../facility-type";
import {facilityTypes} from "../facility-type-data";
import {Facility} from "../facility";
import {ActivatedRoute, Router} from "@angular/router";
import {rentTypes} from "../rent-type-data";
import {FacilityService} from "../facility.service";
import {FacilityTypeService} from "../facility-type.service";
import {RentTypeService} from "../rent-type.service";
import {RentType} from "../rent-type";

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
  facilityTypes: FacilityType[];
  rentTypes: RentType[];
  facilityForm: FormGroup;
  submit: boolean = false;


  constructor(private facilityService: FacilityService, private  activatedRoute: ActivatedRoute,
              private router: Router, private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService) {
  }

  ngOnInit(): void {
    this.getFacilityTypeList();
    this.getRentTypeList();
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const facilityIdFromRoute = routeParams.get('facilityId');
    this.getFacilityUpdate(facilityIdFromRoute);
  }

  getFacilityTypeList(){
    this.facilityTypeService.getAll().subscribe(facilityTypes => {
      this.facilityTypes = facilityTypes;
    })
  }
  getRentTypeList(){
    this.rentTypeService.getAll().subscribe(rentTypes => {
      this.rentTypes  =  rentTypes;
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

  getFacilityUpdate(id: string) {
    return this.facilityService.findById(id).subscribe(facility => {
      this.changeValue(facility.facilityType)
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id, [Validators.required,
          Validators.pattern("^DV-\\d{4}$")]),
        name: new FormControl(facility.name, [Validators.required,
          Validators.pattern("^([A-Z][a-z]*)+(\\s[A-Z][a-z]*)*$")]),
        area: new FormControl(facility.area, [Validators.required,
          Validators.pattern("^\\+*\\d+$")]),
        cost: new FormControl(facility.cost, [Validators.required,
          Validators.pattern("^\\+*\\d+$")]),
        image: new FormControl(facility.image, [Validators.required]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required,
          Validators.pattern("^\\+*\\d+$")]),
        standardRoom: new FormControl(facility.standardRoom, [Validators.required]),
        rentType: new FormControl(facility.rentType, [Validators.required]),
        facilityType: new FormControl(facility.facilityType, [Validators.required]),
        numberOfFloors: new FormControl(facility.numberOfFloors,),
        descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience,),
        poolArea: new FormControl(facility.poolArea,),
      })
    }, error => {
      this.router.navigate(['/error']);
    });
  }

  onSubmit() {
    console.log(this.facilityForm)
    this.submit = true;
    if (this.facilityForm.valid) {
      this.submit = false;
      console.log(this.facilityForm.value)
      const value = this.facilityForm.value;
      this.facilityService.updateFacility(value).subscribe(() => {
        alert("Update Successfully");
        this.router.navigate(['/facility/list']);
      });
    }
  }
}
