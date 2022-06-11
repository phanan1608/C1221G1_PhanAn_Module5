import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Facility} from "../model/facility";
import {facilities} from "../../assets/data/facility";

@Injectable({
  providedIn: 'root'
})

export class FacilityService {

  constructor(private httpClient: HttpClient) {
  }

  private facilities: Facility[] = facilities;

  public getFacilityList() {
    return this.facilities;
  }

}
