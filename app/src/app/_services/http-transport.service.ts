import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ExpressHttpResponseModel } from "../models/http-responose.model";

@Injectable({
	providedIn: "root",
})
export class HttpTransportService {
	private _headers: HttpHeaders;
	constructor(private http: HttpClient) {
		this._headers = new HttpHeaders();
		this._headers = this._headers.append(
			'Content-Type',
			'application/json;charset=utf8'
		);
	}

	retrieveAllProducts(): Observable<any> {
		return this.http.get<ExpressHttpResponseModel>('/api/products', {
			headers: this._headers,
		});
	}

	retrieveOneProduct(id: string): Observable<any> {
		return this.http.get<ExpressHttpResponseModel>(
			`/api/products?id=${id}`,
			{ headers: this._headers }
		);
	}
}
