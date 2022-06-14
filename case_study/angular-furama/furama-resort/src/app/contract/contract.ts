import {Customer} from "../customer/customer";
import {Facility} from "../facility/facility";

export interface Contract {
  id:string;
  startDate: string;
  endDate: string;
  deposit: number;
  totalMoney: number;
  customer: Customer;
  facility: Facility;
}
