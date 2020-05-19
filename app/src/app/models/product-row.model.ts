
import { ProductModel } from 'src/app/models/products.model';

export class ProductRowsModel {
	public doc: ProductModel;
	public id: string;
	public key: string;
	public value: { rev: string };
	constructor({ doc, id, key, value }) {
		this.doc = new ProductModel(doc);
		this.id = id;
		this.key = key;
		this.value = value;
	}
}
