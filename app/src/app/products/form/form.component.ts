import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	@ViewChild('AddEditForm') AddEditForm: NgForm;
	public backgroundImage: string;
	constructor() { }

	ngOnInit(): void {
	}

	submitForm() {

	}

}
