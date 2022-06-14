import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {CustomerType} from "../customer-type";
import {CustomerService} from "../customer.service";
import {customerTypes} from "../customer-type-data";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  constructor(private customerService:CustomerService) { }

  customers:Customer[] ;

  customerTypes:CustomerType[] = customerTypes;
  customerToDelete: string;
  idToDelete: string;

  ngOnInit(): void {
   this.customers= this.customerService.getListCustomer();
  }


  deleteModal(name: string,code:string) {
    this.customerToDelete = name;
    this.idToDelete = code;
  }

  deleteCustomer() {
    this.customerService.delete(this.idToDelete);
    this.ngOnInit()
  }
}
