import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomerService} from "../customer.service";
import {CustomerTypeService} from "../customer-type.service";
import {CustomerType} from "../customer-type";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  submit = false;
  customerTypes: CustomerType[];

  constructor(private customerService: CustomerService, private router: Router, private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.getCustomerTypeList();
    this.customerForm = new FormGroup({
        id: new FormControl("", [Validators.required, Validators.pattern("^KH-\\d{4}$")]),

        name: new FormControl("", [Validators.required]),

        birthDay: new FormControl("", [Validators.required, Validators.pattern("^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$")]),

        gender: new FormControl("", [Validators.required]),

        idCard: new FormControl("", [Validators.required, Validators.pattern("^\\d{9}|\\d{12}$")]),

        phone: new FormControl("", [Validators.required, Validators.pattern("^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$")]),

        email: new FormControl("", [Validators.required, Validators.email]),

        address: new FormControl("", [Validators.required]),

        image: new FormControl("", [Validators.required]),

        customerType: new FormControl("", [Validators.required]),
      }
    )
  }


  getCustomerTypeList() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    })
  }

  onSubmit() {
    console.log(this.customerForm.value)
    this.submit = true;
    if (this.customerForm.valid) {
      this.submit = false;
      const value = this.customerForm.value;
      this.customerService.saveCustomer(value).subscribe(() => {
        alert('Create Successfully');
        this.router.navigate(["/customer/list"])
      }, e => {
        console.log(e);
      })
    }
  }
}
