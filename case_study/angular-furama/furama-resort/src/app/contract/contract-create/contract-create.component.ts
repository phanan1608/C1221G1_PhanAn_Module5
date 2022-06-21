import {Component, OnInit} from '@angular/core';
import {ContractService} from "../contract.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Customer} from "../../customer/customer";
import {Facility} from "../../facility/facility";
import {CustomerService} from "../../customer/customer.service";
import {FacilityService} from "../../facility/facility.service";
import * as moment from 'moment';


@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  constructor(private contractService: ContractService, private router: Router,
              private customerService: CustomerService, private  facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getCustomerList();
    this.getFacilityList();
  }

  submit = false;
  customers: Customer[];
  facilities: Facility[];

  contractForm = new FormGroup({
    id: new FormControl("", [Validators.required,
      Validators.pattern("^HD-\\d{4}$")]),
    startDate: new FormControl("", [Validators.required,
      Validators.pattern("^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$")]),
    endDate: new FormControl("", [Validators.required,
      Validators.pattern("^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$")]),
    deposit: new FormControl("", [Validators.required,
      Validators.pattern("^\\+*\\d+$")]),
    totalMoney: new FormControl("", [Validators.required,
      Validators.pattern("^\\+*\\d+$")]),
    customer: new FormControl("", [Validators.required]),
    facility: new FormControl("", [Validators.required]),
  },[this.checkDate])



  checkDate(date: AbstractControl){
    let now = moment();
    let startDate = moment(date.get('startDate').value);
    let endDate =  moment(date.get('endDate').value);
    if (now.diff(startDate)>0){
      return {startDate: true};
    }
    if (now.diff(endDate)>0){
      return {endDate: true};
    }
    else if (endDate.diff(startDate)<0){
      return {startEndDate: true}
    }
  }

  getCustomerList() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    })
  }

  getFacilityList() {
    this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    })
  }

  onSubmit() {
    this.submit = true
    if (this.contractForm.valid) {
      this.submit = true;
      console.log(this.contractForm.value);
      const value = this.contractForm.value;
      this.contractService.saveContract(value).subscribe(() => {
        alert('Create Successfully');
        this.router.navigate(['/contract/list']);
      });
    }
  }
}
