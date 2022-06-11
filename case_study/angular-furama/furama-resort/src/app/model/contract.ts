import {Customer} from "./customer";
import {Facility} from "./facility";

export interface Contract {
  id:number;
  startDate: string;
  endDate: string;
  deposit: number;
  totalMoney: number;
  customer: Customer;
  facility: Facility;
}
