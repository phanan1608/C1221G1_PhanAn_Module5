import {Component, OnInit} from '@angular/core';
import {Bus} from '../../bus';
import {Place} from '../../place';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {BusService} from '../bus.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaceService} from '../place.service';

@Component({
  selector: 'app-bus-create',
  templateUrl: './bus-create.component.html',
  styleUrls: ['./bus-create.component.css']
})
export class BusCreateComponent implements OnInit {

  bus = {} as Bus;
  placeList: Place[];
  busForm: FormGroup;
  submit = false;


  constructor(private busService: BusService, private router: Router, private activatedRoute: ActivatedRoute,
              private placeService: PlaceService) {
  }

  ngOnInit(): void {
    this.getPlaceList();
    this.createBusForm();
  }

  createBusForm() {
    this.busForm = new FormGroup({
      id:new FormControl(''),
      numberControl: new FormControl('', [Validators.required,
          Validators.pattern('\\d{4}')]),
        type: new FormControl('', [Validators.required]),
        owner: new FormControl('', [Validators.required]),
        placeFrom: new FormControl('', [Validators.required]),
        placeTo: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required,
          Validators.pattern('^(090|093|097)\\d{7}$')]),
        email: new FormControl('', [Validators.required, Validators.email]),
        startTime: new FormControl('', [Validators.required,
          Validators.pattern('^\\d{2}\\:\\d{2}$'), this.validatTime]),
        endTime: new FormControl('', [Validators.required,
          Validators.pattern('^\\d{2}\\:\\d{2}$'), this.validatTime]),
      }
    );
  }

  getPlaceList() {
    this.placeService.getAll().subscribe(placeList => {
      this.placeList = placeList;
      console.log(this.placeList);
    });
  }

  validatTime(control: AbstractControl): ValidationErrors {
    const time = control.value;
    const hour = parseInt(time.split(':')[0]);
    if (hour < 5 || hour >= 23) {
      return {timeValid: true};
    }
    return null;
  }

  onSubmit() {
    console.log(this.busForm);
    console.log(this.placeList);
    this.submit = true;
    if (this.busForm.valid) {
      this.submit = false;
      console.log(this.busForm.value);
      const value = this.busForm.value;
      this.busService.saveBus(value).subscribe(() => {
        alert('Create Successfully');
        this.router.navigate(['/list']);
      });
    }
  }

  compareByPlaceFromId(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }

  compareByPlaceToId(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }

}
