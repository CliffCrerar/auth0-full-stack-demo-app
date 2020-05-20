
class AddEditForm {
	private _id: string; // the id
	private _title: string;
	private _url: string;
	private _maker: string;
	private _img: string;
	private _description: string;

	constructor() { }

	get retailer(): string { return this._id; }
	set retailer(p: string) { this._id = p; }

	get title(): string { return this._title; }
	set title(p: string) { this._title = p; }

	get url(): string { return this._url; }
	set url(p: string) { this._url = p; }

	get maker(): string { return this._maker; }
	set maker(p: string) { this._maker = p; }

	get img(): string { return this._img; }
	set img(p: string) { this._img = p; }

	get description(): string { return this._description; }
	set description(p: string) { this._description = p; }
}
