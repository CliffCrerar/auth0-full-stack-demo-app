import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { defaultProduction } from './img-interface';
import { AddEditForm } from "./form.model";
import { AuthService } from '../../_services/auth.service';
import { HttpTransportService } from 'src/app/_services/http-transport.service';
import { ProductModel } from 'src/app/models/products.model';
import { ProfileModel } from '../../profile/profile.model';


@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	@ViewChild('AddEditForm', { static: true }) aeForm: NgForm;
	public model: AddEditForm;
	public backgroundImage: string;
	public bgImage = '../../../assets/prod-def.png';
	private _user: string;

	constructor(private http: HttpTransportService, private auth: AuthService) {

		this.backgroundImage = `backgroundImage: url(${this.bgImage})`;
		this.model = new AddEditForm();

	}
	get user(): string { return this._user; }
	set user(p: string) { this._user = p; }

	ngOnInit(): void {
		console.log('AddEditForm: ', this.aeForm);
		this.auth.getUser$().subscribe((payload: ProfileModel) => { this.user = payload.name; this.setUser() });
		// this.AddEditForm = new NgForm(Validators: [])
		// console.log('this.AddEditForm: ', this.AddEditForm);
		// this.AddEditForm.subscribe((getComp, error, complete) => {
		// 	console.log('complete: ', complete);
		// 	console.log('error: ', error);
		// 	console.log('getComp: ', getComp);

		// })


		this.devCode();
	}

	setUser = (): unknown => setTimeout(() => { this.model.user = this.user; }, 300);

	postForm = (form: ProductModel): void => {
		console.log('form: ', form);
		this.http.createNewProduct(form).subscribe(payload => {
			console.log('payload: ', payload);
		});
	}

	onSubmitForm(form: NgForm): void { this.postForm(form.value) }


	devCode() {
		this.model.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. In culpa qui officia deserunt mollit anim id est laborum.';
		this.model.maker = 'consectetur adipiscing';
		this.model.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0u7rBdlLPu3RkKCjUNXp8-YSmbzeKmFkiCE1LAUj4VrNZbECp&usqp=CAU';
		this.model.retailer = 'Pinkets';
		this.model.title = 'The pink that will make you think about the pink';
		this.model.url = 'https://www.goodhousekeeping.com/uk/house-and-home/household-advice/a28377663/pink-stuff-cleaner/';
	}
}
