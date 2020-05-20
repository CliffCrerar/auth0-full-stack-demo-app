import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddEditForm } from "./form.model";
import { AuthService } from '../../_services/auth.service';
import { HttpTransportService } from 'src/app/_services/http-transport.service';
import { ProductModel } from 'src/app/models/products.model';
import { ProfileModel } from '../../profile/profile.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExpressHttpResponseModel } from '../../models/http-response.model';


@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
	@ViewChild('AddEditForm', { static: true }) aeForm: NgForm;


	public model = new AddEditForm();
	public backgroundImage: string;
	public bgImage = '../../../assets/prod-def.png';
	private _user: string;
	private _userSubscription: Subscription;
	private _postSubscription: Subscription;
	private _getSubscription: Subscription;
	constructor(private http: HttpTransportService, private auth: AuthService, private route: ActivatedRoute) {
		this.backgroundImage = `backgroundImage: url(${this.bgImage})`;
		this._postSubscription = new Subscription();
		this._userSubscription = new Subscription();
		this._getSubscription = new Subscription();
	}
	get user(): string { return this._user; }
	set user(p: string) { this._user = p; }
	ngOnInit(): void {
		this._userSubscription = this.auth.getUser$().subscribe((payload: ProfileModel) => {
			this.user = payload.name;
			this.setUser();
		});
		if (this.route.snapshot.paramMap.get('newOrEdit') === 'edit') {
			this._getSubscription = this.http.retrieveOneProduct(
				this.route.snapshot.paramMap.get('id')).subscribe(this.handleGet);
		}
	}
	ngOnDestroy(): void {
		this._userSubscription.unsubscribe();
		this._postSubscription.unsubscribe();
		this._getSubscription.unsubscribe();
	}
	setUser = (): unknown => setTimeout(() => { this.model.user = this.user; }, 300);
	handlePost = (form: ProductModel): void => {
		console.log('form: ', form);
		this._postSubscription = this.http.createNewProduct(form).subscribe(payload => {
			console.log('payload: ', payload);
		});
	}

	handleGet = (payload: ExpressHttpResponseModel): void => {
		const doc = payload.body.rows[0].doc;
		this.model.description = doc.description;
		this.model.img = doc.img;
		this.model.maker = doc.maker;
		this.model.retailer = doc._id;
		this.model.title = doc.title;
		this.model.url = doc.url;
		this.model.user = doc.user;
	}

	onSubmitForm(form: NgForm): void { this.handlePost(form.value); }
}
