import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../customer";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../customer.service";
import {CustomerTypeService} from "../customer-type.service";
import {CustomerType} from "../customer-type";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer = {} as Customer;
  customerForm: FormGroup;
  customerTypes: CustomerType[];
  submit = false;


  constructor(private customerService: CustomerService, private router: Router,
              private  customerTypeService: CustomerTypeService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const customerIdFromRoute = routeParams.get('customerId');
    this.getCustomerUpdate(customerIdFromRoute);
    this.getCustomerTypeList();
  }

  getCustomerTypeList() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    })
  }

  getCustomerUpdate(id: string) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerForm = new FormGroup({
        customerId: new FormControl(customer.customerId, [Validators.required,
            Validators.pattern("^KH-\\d{4}$")]),
        customerName: new FormControl(customer.customerName, [Validators.required]),
        customerBirthday: new FormControl(customer.customerBirthday, [Validators.required,
            Validators.pattern("^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$")]),
        customerGender: new FormControl(customer.customerGender, [Validators.required]),
        customerIdCard: new FormControl(customer.customerIdCard, [Validators.required,
            Validators.pattern("^\\d{9}|\\d{12}$")]),
        customerPhone: new FormControl(customer.customerPhone, [Validators.required,
            Validators.pattern("^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$")]),
        customerEmail: new FormControl(customer.customerEmail, [Validators.required, Validators.email]),
        customerAddress: new FormControl(customer.customerAddress, [Validators.required]),
        urlImage: new FormControl(customer.urlImage, [Validators.required]),
        customerType: new FormControl(customer.customerType, [Validators.required]),
        }
      )
    }, error => {
      this.router.navigate(['/error']);
    });
  }

  onSubmit() {
    console.log(this.customerForm)
    this.submit = true;
    if (this.customerForm.valid) {
      this.submit = false;
      console.log(this.customerForm.value)
      const value = this.customerForm.value;
      this.customerService.updateCustomer(value).subscribe(() => {
        alert("Update Successfully");
        this.router.navigate(['/customer/list']);
      });
    }
  }

  compareByID(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }
}
