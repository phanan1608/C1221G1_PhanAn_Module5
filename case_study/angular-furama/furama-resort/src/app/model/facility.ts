import {RentType} from "./rent-type";
import {FacilityType} from "./Facility-type";

export interface Facility {
  id:number;
  name:string;
  area:number;
  cost:number;
  urlImage:string;
  maxPeople:number;
  standardRoom?: string;
  descriptionOtherConvenience?:string;
  poolArea?:number;
  numberOfFloor?:number;
  rentType?:RentType;
  facility?:FacilityType;
}
