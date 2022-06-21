import {Customer} from './customer';

export interface Estate {
  id:number;
  code:string;
  customer: Customer;
  transactionDate: string;
  serviceType: string;
  price: number;
  area: number;
}
