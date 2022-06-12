import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer-service";
import {Customer} from "../../model/customer";
import {CustomerTypeService} from "../../service/customer-type-service";
import {CustomerType} from "../../model/customer-type";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  constructor(private customerService:CustomerService, private customerTypeService:CustomerTypeService) { }

  customers:Customer[] =this.customerService.getListCustomer();

  customerTypes:CustomerType[] = this.customerTypeService.getListCustomerType();

  ngOnInit(): void {
  }


}
