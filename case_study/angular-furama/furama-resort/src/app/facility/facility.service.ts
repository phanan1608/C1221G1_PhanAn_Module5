import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Facility} from "./facility";
import {facilities} from "./facility-data";
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})

export class FacilityService {

  constructor(private httpClient: HttpClient) {
  }

  private facilities: Facility[] = facilities;

  getFacilityList() {
    return this.facilities;
  }

  addFacility(facility:Facility){
    this.facilities.push(facility)
  }

  editFacility(facility: Facility) {
    let index =  this.facilities.findIndex(element => element.id === facility.id)
    this.facilities[index] = facility;
   // for (let i=0;i<this.facilities.length ; i++){
   //    if (this.facilities[i].id==facility.id){
   //      this.facilities[i] = facility;
   //    }
   //  }

  }

  delete(idToDelete: string) {
    this.facilities =  this.facilities.filter(customer => customer.id!=idToDelete);
  }
}
