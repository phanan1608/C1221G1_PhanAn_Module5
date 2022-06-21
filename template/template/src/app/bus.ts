import {Place} from './place';

export interface Bus {
  id:number;
  numberControl: number;
  type: string;
  owner: string;
  placeFrom: Place;
  placeTo: Place;
  phone: string;
  email: string;
  startTime: string;
  endTime: string
}
