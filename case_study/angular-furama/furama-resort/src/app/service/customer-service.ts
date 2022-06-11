import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer";
import {customers} from "../../assets/data/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {
  }

  private customers: Customer[] = customers;

  public getListCustomer(){
    return this.customers;
  }
}
