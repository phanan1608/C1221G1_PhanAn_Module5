import {Component, OnInit} from '@angular/core';
import {facilityTypes} from "../facility-type-data";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityType} from "../facility-type";
import {rentTypes} from "../rent-type-data";
import {Router} from "@angular/router";
import {FacilityService} from "../facility.service";
import {RentType} from "../rent-type";
import {FacilityTypeService} from "../facility-type.service";
import {RentTypeService} from "../rent-type.service";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  villa: boolean = true;
  house: boolean = true;
  room: boolean = true;
  selectedValue: any = 'null';
  facilityTypes: FacilityType[];
  rentTypes: RentType[];
  facilityForm: FormGroup;
  submit:boolean = false


  constructor(private facilityService:FacilityService, private router:Router,
              private facilityTypeService: FacilityTypeService, private rentTypeService: RentTypeService) {
  }

  ngOnInit(): void {
    this.getFacilityTypeList();
    this.getRentTypeList();
    this.facilityForm = new FormGroup({
      id: new FormControl("", [Validators.required, Validators.pattern("^DV-\\d{4}$")]),
      name: new FormControl("", [Validators.required, Validators.pattern("^([A-Z][a-z]*)+(\\s[A-Z][a-z]*)*$")]),
      area: new FormControl("", [Validators.required, Validators.pattern("^\\+*\\d+$")]),
      cost: new FormControl("", [Validators.required, Validators.pattern("^\\+*\\d+$")]),
      image: new FormControl("", [Validators.required]),
      maxPeople: new FormControl("", [Validators.required, Validators.pattern("^\\+*\\d+$")]),
      standardRoom: new FormControl("", [Validators.required]),
      rentType: new FormControl("", [Validators.required]),
      facilityType: new FormControl("", [Validators.required]),
      numberOfFloors: new FormControl("",),
      descriptionOtherConvenience: new FormControl("",),
      poolArea: new FormControl("", ),
    })
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
    this.submit = true;
    if (this.facilityForm.valid){
      this.submit = false;
      console.log(this.facilityForm.value);
      const value = this.facilityForm.value;
      this.facilityService.saveFacility(value).subscribe(() => {
        alert('Create Successfully');
        this.router.navigate(["/facility/list"])
      }, e => {
        console.log(e);
      })
    }
  }
}
