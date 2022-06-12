import {Component, OnInit} from '@angular/core';
import {facilityTypes} from "../../../assets/data/facility-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

  constructor() {
  }

  ngOnInit(): void {
  }

  facilityTypes = facilityTypes;

  facilityForm = new FormGroup({
    id: new FormControl("", [Validators.required, Validators.pattern("^DV-\\d{4}$")]),
    name: new FormControl("", [Validators.required, Validators.pattern("^([A-Z][a-z]*)+(\\s[A-Z][a-z]*)*$")]),
    area: new FormControl("", [Validators.required, Validators.pattern("^\\+*\\d+$")]),
    cost: new FormControl("", [Validators.required, Validators.pattern("^\\+*\\d+$")]),
    image: new FormControl("", [Validators.required]),
    maxPeople: new FormControl("", [Validators.required, Validators.pattern("^\\+*\\d+$")]),
    standardRoom: new FormControl("", [Validators.required]),
    rentType: new FormControl("", [Validators.required]),
    facilityTypeId: new FormControl("", [Validators.required]),
    numberOfFloors: new FormControl("",),
    descriptionOtherConvenience: new FormControl("",),
    poolArea: new FormControl("", ),
  })


  changeValue(value: any) {
    this.selectedValue = value;
    switch (this.selectedValue) {
      case '1':
        this.villa = false;
        this.house = true;
        this.room = true;
        break;
      case '2':
        this.villa = true;
        this.house = false;
        this.room = true;
        break;
      case '3':
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
    console.log(this.facilityForm.value)
  }
}
