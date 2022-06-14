import {RentType} from "./rent-type";
import {FacilityType} from "./facility-type";

export interface Facility {
  id:string;
  name:string;
  area:number;
  cost:number;
  image:string;
  maxPeople:number;
  standardRoom?: string;
  descriptionOtherConvenience?:string;
  poolArea?:number;
  numberOfFloors?:number;
  rentType?:RentType;
  facilityType?:FacilityType
}
