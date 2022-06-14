import {CustomerType} from "./customer-type";

export interface Customer {
  customerType: CustomerType;
  code: string;
  name: string;
  birthDay: string;
  gender: number;
  idCard: string;
  phone: string;
  email: string;
  address: string;
  image:string
}
