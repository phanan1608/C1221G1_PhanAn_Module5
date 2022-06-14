import {Component, OnInit} from '@angular/core';
import {Contract} from "../../model/contract";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";
import {ContractService} from "../../service/contract.service";
import {FacilityService} from "../../service/facility.service";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {


  constructor(private contractService: ContractService, private customerService: CustomerService, private facilityService: FacilityService) {
  }
  contracts: Contract[] ;
  // customers: Customer[] = this.customerService.getListCustomer();
  // facilities: Facility[] = this.facilityService.getFacilityList();

  ngOnInit(): void {
    this.contracts = this.contractService.getListContract();
  }



}
