import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/products.model';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
	@Input() productsList: ProductModel[];

	constructor() {

	}

	ngOnInit(): void {

	}

	onCardClick(cardId: string): void {

	}

}
