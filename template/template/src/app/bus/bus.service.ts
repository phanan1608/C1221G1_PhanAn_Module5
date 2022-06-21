import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bus} from '../bus';

const API_URL = `${environment.apiUrl}/transport`;

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http: HttpClient) {
  }

  // getAll(): Observable<Bus[]> {
  //   return this.http.get<Bus[]>(API_URL);
  // }
  getAll(): Observable<any> {
    return this.http.get<any>(`${API_URL}`);
  }

  getAllAndSearch(from:string, to:string): Observable<any> {
    return this.http.get<any>(`${API_URL}?from=${from}&to=${to}`);
  }

  saveBus(bus): Observable<Bus> {
    return this.http.post<Bus>(`${API_URL}`, bus);
  }

  findById(id: number): Observable<Bus> {
    return this.http.get<Bus>(`${API_URL}/${id}`);
  }

  updateBus(bus: Bus): Observable<Bus> {
    return this.http.put<Bus>(`${API_URL}/${bus.id}`, bus);
  }

  deleteBus(id: number): Observable<Bus> {
    return this.http.delete<Bus>(`${API_URL}/${id}`);
  }


}
