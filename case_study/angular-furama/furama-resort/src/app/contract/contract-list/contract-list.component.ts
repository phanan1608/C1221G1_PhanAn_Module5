import {Component, OnInit} from '@angular/core';
import {Contract} from "../contract";
import {ContractService} from "../contract.service";
import {FacilityService} from "../../facility/facility.service";
import {CustomerService} from "../../customer/customer.service";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {


  constructor(private contractService: ContractService, private customerService: CustomerService,
              private facilityService: FacilityService) {
  }

  contracts: Contract[];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.contractService.getAll().subscribe(contracts =>{
      this.contracts = contracts;
    })
  }

}
