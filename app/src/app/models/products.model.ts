/* PRODUCTS MODEL */

export class ProductModel {
	public _id: string;
	public maker: string;
	public img: string;
	public url: string;
	public title: string;
	public description: string;
	public _rev: string;
	constructor({ _id, maker, url, title, _rev, img, description}) {
		this._id = _id;
		this.maker = maker;
		this.img = img;
		this.url = url;
		this.description = description;
		this.title = title;
		this._rev = _rev;
	}
}
