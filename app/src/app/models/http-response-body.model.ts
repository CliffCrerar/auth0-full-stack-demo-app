import { ProductRowsModel } from './product-row.model';

export class ExpressHttpResponseBodyModel {
	public offset: number;
	public retrieved: string;
	public rows: ProductRowsModel[];
	public table: string;
	public total_rows: number;
	constructor({ offset, retrieved, rows, table, total_rows }) {
		this.total_rows = total_rows;
		this.retrieved = retrieved;
		this.offset = offset;
		this.table = table;
		this.rows = rows.map(row => new ProductRowsModel(row));
	}
}
