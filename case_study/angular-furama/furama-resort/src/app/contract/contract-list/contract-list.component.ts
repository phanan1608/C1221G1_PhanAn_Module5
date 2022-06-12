import {Component, OnInit} from '@angular/core';
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


  constructor(private contractService: ContractService, private customerService: CustomerService, private facilityService: FacilityService) {
  }
  contracts: Contract[] = this.contractService.getListContract();
  customers: Customer[] = this.customerService.getListCustomer();
  facilities: Facility[] = this.facilityService.getFacilityList();

  ngOnInit(): void {
  }



}
