import { Component, OnInit } from '@angular/core';
import {contracts} from "../../../assets/data/contract";
import {ContractService} from "../../service/contract-service";
import {customers} from "../../../assets/data/customer";
import {facilities} from "../../../assets/data/facility";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  constructor(private contractService:ContractService) { }

  ngOnInit(): void {
  }

  customers = customers;
  facilities = facilities;

  contractForm = new FormGroup({
    id: new FormControl("",[Validators.required, Validators.pattern("^HD-\\d{4}$")]),
    startDate: new FormControl("",[Validators.required, Validators.pattern("^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$")]),
    endDate: new FormControl("",[Validators.required,Validators.pattern("^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$")]),
    deposit: new FormControl("",[Validators.required, Validators.pattern("^\\+*\\d+$")]),
    totalMoney: new FormControl("",[Validators.required, Validators.pattern("^\\+*\\d+$")]),
    customer: new FormControl("",[Validators.required]),
    facility: new FormControl("",[Validators.required]),
  })


  onSubmit() {
    console.log(this.contractForm.value)
    this.contractService.addContract(this.contractForm.value)
  }
}
