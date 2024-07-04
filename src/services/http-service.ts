import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductList } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // GET request
  getData(apiUrl: string): Observable<IProductList> {
    return this.http.get<IProductList>(`${apiUrl}`);
  }
}
