import {Component, OnInit} from '@angular/core';
import {ContractService} from "../contract.service";
import {customers} from "../../customer/customer-data";
import {facilities} from "../../facility/facility-data";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  constructor(private contractService: ContractService, private router: Router) {
  }

  ngOnInit(): void {
  }
  submit = false;
  customers = customers;
  facilities = facilities;

  contractForm = new FormGroup({
    id: new FormControl("", [Validators.required, Validators.pattern("^HD-\\d{4}$")]),
    startDate: new FormControl("", [Validators.required, Validators.pattern("^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$")]),
    endDate: new FormControl("", [Validators.required, Validators.pattern("^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$")]),
    deposit: new FormControl("", [Validators.required, Validators.pattern("^\\+*\\d+$")]),
    totalMoney: new FormControl("", [Validators.required, Validators.pattern("^\\+*\\d+$")]),
    customer: new FormControl("", [Validators.required]),
    facility: new FormControl("", [Validators.required]),
  })


  onSubmit() {
    this.submit = true
    if (this.contractForm.valid) {
      this.submit = true;
      console.log(this.contractForm.value);
      this.contractService.addContract(this.contractForm.value);
      this.router.navigate(['/contract/list']);
    }
  }
}
