import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CustomerType} from "../model/customer-type";
import {customerTypes} from "../../assets/data/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  constructor(private httpClient: HttpClient) {
  }

  private customerTypes: CustomerType[] = customerTypes;

  public getListCustomerType(){
    return this.customerTypes;
  }
}
