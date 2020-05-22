import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpTransportService } from 'src/app/_services/http-transport.service';
import { ExpressHttpResponseModel } from 'src/app/models/http-response.model';
import { Subscription } from 'rxjs';
import { ProductModel } from 'src/app/models/products.model';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
	public SectionState: 'List' | 'Edit';
	public httpRetrieveResponse: ExpressHttpResponseModel;
	public httpRetrieveErrorResponse: ExpressHttpResponseModel;
	public productDocuments: ProductModel[];

	private _retrieveSubscription: Subscription;

	constructor(private http: HttpTransportService) {
		this.SectionState = 'List';
	}

	ngOnInit(): void {
		this._retrieveSubscription = this.http.retrieveAllProducts().subscribe(
			(payload: ExpressHttpResponseModel) =>
				this.handleHttpRetrievePayLoad(payload),
			(error: ExpressHttpResponseModel) =>
				this.handleHttpRetrieveErrorPayLoad(error)
		);
	}

	ngOnDestroy() {
		this._retrieveSubscription.unsubscribe();
	}

	set sectionState(newState: string) {
		this.sectionState = newState;
	}

	getRowsFromResponse(responseModel: ExpressHttpResponseModel): void {
		responseModel.body.rows.forEach((row) => row.doc);
	}

	handleHttpRetrievePayLoad(
		payload: ExpressHttpResponseModel
	): ProductModel[] {
		console.log('this.httpRetrieveResponse: ', payload);
		this.httpRetrieveResponse = new ExpressHttpResponseModel(payload);
		this.productDocuments = this.httpRetrieveResponse.body.rows.map(
			(row) => row.doc
		);
		return this.productDocuments;
	}

	handleHttpRetrieveErrorPayLoad(error: ExpressHttpResponseModel): void {
		this.httpRetrieveErrorResponse = new ExpressHttpResponseModel(error);
		console.log(
			'this.httpRetrieveErrorResponse: ',
			this.httpRetrieveErrorResponse
		);
	}
}
