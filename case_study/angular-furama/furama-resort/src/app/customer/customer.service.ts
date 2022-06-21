import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Customer} from "./customer";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}`;
const SPRING_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(SPRING_URL +'/customerRest/customers');
  }

  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>( SPRING_URL+ '/customerRest/customers', customer);
  }

  findById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${SPRING_URL}/customerRest/customers/${id}`);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${SPRING_URL}/customerRest/customers/${customer.customerId}`, customer);
  }

  deleteCustomer(id: string): Observable<any> {
    return this.http.delete<any>(`${SPRING_URL}/customerRest/customers/${id}`);
  }
}
