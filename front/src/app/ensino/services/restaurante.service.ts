import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Restaurant } from '../models/restaurant.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestauranteService {
  constructor(private http: HttpClient) {}

  fetchRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${environment.api.url}/restaurants`);
  }
}
