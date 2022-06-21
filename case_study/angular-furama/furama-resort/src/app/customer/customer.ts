import {CustomerType} from "./customer-type";

export interface Customer {
  customerType: CustomerType;
  customerId: string;
  customerName: string;
  customerBirthday: string;
  customerGender: number;
  customerIdCard: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  urlImage:string
}
