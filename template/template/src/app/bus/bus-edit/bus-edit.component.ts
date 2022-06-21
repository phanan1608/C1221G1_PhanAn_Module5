import { Component, OnInit } from '@angular/core';
import {Bus} from '../../bus';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BusService} from '../bus.service';
import {PlaceService} from '../place.service';
import {Place} from '../../place';

@Component({
  selector: 'app-bus-edit',
  templateUrl: './bus-edit.component.html',
  styleUrls: ['./bus-edit.component.css']
})
export class BusEditComponent implements OnInit {
  bus = {} as Bus;
  placeList: Place[];
  busForm: FormGroup;
  submit = false;



  constructor(private busService:BusService,private router: Router,private activatedRoute: ActivatedRoute,
              private placeService: PlaceService) { }

  ngOnInit(): void {
    this.getPlaceList();
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const busIdFromRoute = routeParams.get('id');
    this.getBusToEdit(+busIdFromRoute);
    console.log(busIdFromRoute);
    console.log(this.bus);
  }

  getBusToEdit(id: number) {
    return this.busService.findById(id).subscribe(bus => {
      this.busForm = new FormGroup({
        id:new FormControl(bus.id),
        numberControl: new FormControl(bus.numberControl),
        type: new FormControl(bus.type,[Validators.required]),
        owner: new FormControl(bus.owner,[Validators.required]),
        placeFrom: new FormControl(bus.placeFrom,[Validators.required]),
        placeTo: new FormControl(bus.placeTo,[Validators.required]),
        phone: new FormControl(bus.phone,[Validators.required,
          Validators.pattern("^(090|093|097)\\d{7}$")]),
        email: new FormControl(bus.email,[Validators.required,Validators.email]),
        startTime: new FormControl(bus.startTime,[Validators.required,
          Validators.pattern("^\\d{2}\\:\\d{2}$"),this.validatTime]),
        endTime: new FormControl(bus.endTime,[Validators.required,
          Validators.pattern("^\\d{2}\\:\\d{2}$"),this.validatTime]),
        }
      )
    }, error => {
      this.router.navigate(['/error']);
    });
  }

  getPlaceList() {
    this.placeService.getAll().subscribe(placeList => {
      this.placeList = placeList;
      console.log(this.placeList);
    });
  }

  validatTime(control: AbstractControl): ValidationErrors{
    const time = control.value;
    const hour = parseInt( time.split(":")[0]);
    if (hour<5 || hour>=23){
      return {timeValid:true}
    } return null
  }

  onSubmit() {
    console.log(this.busForm);
    console.log(this.placeList);
    this.submit = true;
    if (this.busForm.valid) {
      this.submit = false;
      console.log(this.busForm.value)
      const value = this.busForm.value;
      this.busService.updateBus(value).subscribe(() => {
        alert("Update Successfully");
        this.router.navigate(['/list']);
      } );
    }
  }

  compareByPlaceFromId(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }

  compareByPlaceToId(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }

}
