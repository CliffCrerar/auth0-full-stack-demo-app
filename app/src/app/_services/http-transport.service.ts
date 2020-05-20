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
	/**
	 * @description Retrieve all documents
	 */
	retrieveAllProducts = (): Observable<any> =>
		this.http.get<ExpressHttpResponseModel>('/api/products', { headers: this._headers, })
	/**
	 * @description Retrieve one document
	 */
	retrieveOneProduct = (id: string): Observable<any> =>
		this.http.get<ExpressHttpResponseModel>(`/api/products?id=${id}`, { headers: this._headers })
	/**
	 * @description Delete document per ID
	 */
	deleteProductPerId = (id: string): Observable<any> =>
		this.http.delete(`/api/products?id=${id}`, { headers: this._headers })
}
