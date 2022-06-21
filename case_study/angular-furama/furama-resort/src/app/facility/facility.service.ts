import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Facility} from "./facility";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class FacilityService {

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(API_URL + '/facilities');
  }

  saveFacility(facility): Observable<Facility> {
    return this.http.post<Facility>(`${API_URL}/facilities`, facility);
  }

  findById(id: string): Observable<Facility> {
    return this.http.get<Facility>(`${API_URL}/facilities/${id}`);
  }

  updateFacility(facility: Facility): Observable<Facility> {
    return this.http.put<Facility>(`${API_URL}/facilities/${facility.id}`, facility);
  }

  deleteFacility(id: string): Observable<Facility> {
    return this.http.delete<Facility>(`${API_URL}/facilities/${id}`);
  }

  search(name: string, cost: string, facilityType: string): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${API_URL}/facilities?name_like=${name}&cost_like=${cost}&facilityType.id_like=${facilityType}`,);


  }
}
