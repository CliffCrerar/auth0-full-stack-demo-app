import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProductModel} from 'src/app/models/products.model';

@Injectable({
  providedIn: 'root'
})
export class HttpTransportService {
  private _headers: HttpHeaders;
  constructor(private http: HttpClient  ) {
    this._headers = new HttpHeaders();
    this._headers = this._headers.append('Content-Type', 'application/json;charset=utf8');
  }

  retrieveProducts(): Observable<> {
    return this.http.get<ProductModel>('/api/products', {headers: this._headers});
  }
}
