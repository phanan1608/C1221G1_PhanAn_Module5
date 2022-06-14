import {Component, OnInit} from '@angular/core';
import {facilityTypes} from "../../../assets/data/facility-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {FacilityType} from "../../model/facility-type";
import {rentTypes} from "../../../assets/data/rent-type";

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
  facilityTypes = facilityTypes;
  rentTypes = rentTypes;
  facilityForm: FormGroup;
  submit:boolean = false


  constructor(private facilityService:FacilityService) {
  }

  ngOnInit(): void {
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
      this.facilityService.addFacility(this.facilityForm.value);
    }
  }
}
