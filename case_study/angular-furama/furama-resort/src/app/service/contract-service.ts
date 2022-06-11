import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Contract} from "../model/contract";
import {contracts} from "../../assets/data/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  constructor(private httpClient: HttpClient) {
  }

  private contracts: Contract[] = contracts;

  public getListContract(){
    return this.contracts;
  }
}
