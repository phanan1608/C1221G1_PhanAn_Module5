import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Contract} from "./contract";
import {contracts} from "./contract-data";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  constructor(private httpClient: HttpClient) {
  }

  private contracts: Contract[] = contracts;

  getListContract(){
    return this.contracts;
  }
  addContract(contract:Contract){
    this.contracts.push(contract);
  }
}
