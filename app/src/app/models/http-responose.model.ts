/**
 * @description Http Response model
 */

import { ProductModel } from 'src/app/models/products.model';
import { ExpressHttpResponseBodyModel } from './http-response-body.model';
import { ExpressRequestHeaders } from './http-resp-req-hdrs.model';

export class ExpressHttpResponseModel {
	public Ok: boolean;
	public body: ExpressHttpResponseBodyModel;
	public headers: ExpressRequestHeaders;
	public message: string;
	public name: string;
	public path: string;
	public query: object;
	public status: number;
	public statusText: string;
	constructor({ Ok, body, headers, message, name, path, query, status, statusText }) {
		this.Ok = Ok;
		this.body = new ExpressHttpResponseBodyModel(body);
		this.headers = new ExpressRequestHeaders(headers);
		this.message = message;
		this.name = name;
		this.path = path;
		this.query = query;
		this.status = status;
		this.statusText = statusText;
	}
}

