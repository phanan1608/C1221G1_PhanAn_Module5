import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Place} from '../place';


const API_URL = `${environment.apiUrl}/location`;

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Place[]> {
    return this.http.get<Place[]>(API_URL);
  }
}
