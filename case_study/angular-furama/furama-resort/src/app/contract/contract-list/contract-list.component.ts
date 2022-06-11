import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";
import {ContractService} from "../../service/contract-service";
import {CustomerService} from "../../service/customer-service";
import {FacilityService} from "../../service/facility-service";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract[];
  customers: Customer[];
  facilities: Facility[];

  constructor(private contractService:ContractService,private customerService:CustomerService, private facilityService:FacilityService) { }

  ngOnInit(): void {
    this.getListContract();
    this.getListCustomer();
    this.getListFacitity()
  }

  getListContract(){
    this.contracts = this.contractService.getListContract();
  }
  getListCustomer(){
    this.customers = this.customerService.getListCustomer();
  }
  getListFacitity(){
    this.facilities = this.facilityService.getFacilityList();
  }

}
