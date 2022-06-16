import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FacilityType} from "./facility-type";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<FacilityType[]> {
    return this.http.get<FacilityType[]>(API_URL + '/facilityTypes ');
  }
}
