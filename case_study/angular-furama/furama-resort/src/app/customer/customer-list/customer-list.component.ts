import {Component, OnInit} from '@angular/core';
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  constructor(private customerService: CustomerService) {
  }

  customers: Customer[];

  customerToDelete: string;
  idToDelete: string;
  p: number;

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  deleteModal(name: string, code: string) {
    this.customerToDelete = name;
    this.idToDelete = code;
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.idToDelete).subscribe(() => {
        this.customerService.deleteCustomer(this.idToDelete);
        this.ngOnInit();
      }
    );
  }
}
