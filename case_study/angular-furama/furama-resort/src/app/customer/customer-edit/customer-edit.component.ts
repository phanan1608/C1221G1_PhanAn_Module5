import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {customerTypes} from "../customer-type-data";
import {Customer} from "../customer";
import {ActivatedRoute, Router} from "@angular/router";
import {customers} from "../customer-data";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer = {} as Customer;
  customers = customers;
  customerForm: FormGroup;
  customerTypes = customerTypes;
  submit = false;


  constructor(private customerService:CustomerService, private router:Router, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const customerIdFromRoute = routeParams.get('customerId');
    this.customer = this.customers.find(customer => customer.code === customerIdFromRoute);

    if (this.customer === undefined) {
      this.router.navigate(['/error']);
    }
    this.customerForm = new FormGroup({
        code: new FormControl(this.customer.code,[Validators.required, Validators.pattern("^KH-\\d{4}$")]),

        name: new FormControl(this.customer.name,[Validators.required]),

        birthDay: new FormControl(this.customer.birthDay,[Validators.required, Validators.pattern("^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$")]),

        gender: new FormControl(this.customer.gender,[Validators.required]),

        idCard: new FormControl(this.customer.idCard,[Validators.required, Validators.pattern("^\\d{9}|\\d{12}$")]),

        phone: new FormControl(this.customer.phone,[Validators.required, Validators.pattern("^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$")]),

        email: new FormControl(this.customer.email,[Validators.required, Validators.email]),

        address: new FormControl(this.customer.address,[Validators.required]),

        image: new FormControl(this.customer.image,[Validators.required]),

        customerType: new FormControl(this.customer.customerType,[Validators.required]),
      }
    )

  }

  onSubmit() {
    console.log(this.customerForm)
    this.submit = true;
    if (this.customerForm.valid){
      this.submit = false;
      console.log(this.customerForm.value)
      this.customerService.editCustomer(this.customerForm.value);
      this.router.navigate(['/customer/list']);
    }
  }
  compareByID(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }
}
