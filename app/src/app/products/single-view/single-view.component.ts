import { Component, OnInit } from '@angular/core';
import { HttpTransportService } from '../../_services/http-transport.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ExpressHttpResponseModel } from '../../models/http-response.model';
import { ProductModel } from 'src/app/models/products.model';
import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';

@Component({
	selector: 'app-single-view',
	templateUrl: './single-view.component.html',
	styleUrls: ['./single-view.component.scss']
})
export class SingleViewComponent implements OnInit {

	private _id: string;
	public singleDoc: ProductModel;
	public httpResponse: ExpressHttpResponseModel;
	public errorResponse: ExpressHttpResponseModel;

	constructor(private http: HttpTransportService, private _location: Location, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.id = this.route.snapshot.paramMap.get('id');
		this.http.retrieveOneProduct(this.id).subscribe(
			payload => this.handleHttpResponsePayLoad(payload),
			error => this.handleHttpResponseError(error)
		);
	}

	get id(): string { return this._id; }
	set id(param: string) { this._id = param; }

	handleHttpResponsePayLoad(payLoad: ExpressHttpResponseModel) {
		console.log('payLoad: ', payLoad);
		this.httpResponse = new ExpressHttpResponseModel(payLoad);
		this.singleDoc = this.httpResponse.body.rows[0].doc;
		console.log('this.singleDoc: ', this.singleDoc);
	}

	handleHttpResponseError(error: ExpressHttpResponseModel) {
		this.errorResponse = new ExpressHttpResponseModel(error);
		console.log('this.errorResponse: ', this.errorResponse);
	}

	goBack = () => this._location.back();

	onDeleteClick = (productId: string) => {
		this.http.deleteProductPerId(productId).subscribe(payload => {
			console.log('payload: ', payload);
		})
	}
}
