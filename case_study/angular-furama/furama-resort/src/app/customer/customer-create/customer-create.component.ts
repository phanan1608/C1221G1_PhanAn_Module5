import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {customerTypes} from "../../../assets/data/customer-type";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  customerTypes = customerTypes;

  customerForm = new FormGroup({
      code: new FormControl("",[Validators.required, Validators.pattern("^KH-\\d{4}$")]),

      name: new FormControl("",[Validators.required]),

      birthDay: new FormControl("",[Validators.required, Validators.pattern("^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$")]),

      gender: new FormControl("",[Validators.required]),

      idCard: new FormControl("",[Validators.required, Validators.pattern("^\\d{9}|\\d{12}$")]),

      phone: new FormControl("",[Validators.required, Validators.pattern("^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$")]),

      email: new FormControl("",[Validators.required, Validators.email]),

      address: new FormControl("",[Validators.required]),

      image: new FormControl("",[Validators.required]),

      customerTypeId: new FormControl("",[Validators.required]),
    }
  )

  onSubmit() {
    console.log(this.customerForm.value)
  }
}
