/**
 * @description Profile model
 */

export class ProfileModel {

	private _firsName: string;
	private _middleName: string;
	private _lastName: string;

	constructor(
		public nickname?: string,
		public name?: string,
		public picture?: string,
		public updated_at?: string,
		public email?: string,
		public email_verified?: string,
		public sub?: string,
	) {

		this._firsName = this.getFirstName(name);
		this._middleName = this.getMiddleName(name);
		this._lastName = this.getLastName(name);
		console.log(this);

	}

	get firstName(): string { return this._firsName; }
	get middleName(): string { return this._middleName; }
	get lastName(): string { return this._lastName; }

	getFirstName = (n: string): string => n.split(' ')[0];
	getMiddleName = (n: string): string => n.split(' ').length > 2 ? n.split(' ')[1] : null;
	getLastName = (n: string): string => this.middleName === null ? n.split(' ')[1] : n.split(' ')[2];
}
