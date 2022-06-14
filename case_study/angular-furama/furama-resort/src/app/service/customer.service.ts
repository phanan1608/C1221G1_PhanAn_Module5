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

  getListCustomer(){
    return this.customers;
  }

  addCustomer(customer:Customer){
    this.customers.push(customer);
  }

  editCustomer(customer: Customer) {
    for (let i=0;i<this.customers.length ; i++){
      if (this.customers[i].code==customer.code){
        this.customers[i] = customer;
      }
    }
  }

  delete(idToDelete: string) {
    this.customers =  this.customers.filter(customer => customer.code!=idToDelete);
  }
}
