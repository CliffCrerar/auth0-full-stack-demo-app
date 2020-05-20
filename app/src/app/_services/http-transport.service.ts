import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/products.model';
import { ExpressHttpResponseModel } from 'src/app/models/http-response.model';


@Injectable({
	providedIn: 'root',
})
export class HttpTransportService {
	private _headers: HttpHeaders;
	constructor(private http: HttpClient) {
		this._headers = new HttpHeaders();
		this._headers = this._headers.append(
			'Content-Type',
			'application/json'
		);
	}
	get headers() { return { headers: this._headers }; }
	/**
	 * @description Retrieve all documents
	 */
	retrieveAllProducts = (): Observable<ExpressHttpResponseModel> =>
		this.http.get<ExpressHttpResponseModel>('/api/products', this.headers)
	/**
	 * @description Retrieve one document
	 */
	retrieveOneProduct = (id: string): Observable<ExpressHttpResponseModel> =>
		this.http.get<ExpressHttpResponseModel>(`/api/products?id=${id}`, this.headers)
	/**
	 * @description Delete document per ID
	 */
	deleteProductPerId = (id: string): Observable<object> =>
		this.http.delete(`/api/products?id=${id}`, this.headers)
	/**
	 * @description Add new document
	 */
	createNewProduct = (body: ProductModel): Observable<object> =>
		this.http.post(`/api/products/`, body, this.headers)
}
