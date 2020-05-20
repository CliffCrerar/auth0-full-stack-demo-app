import { Component, OnInit } from "@angular/core";
import { AuthService } from "./_services/auth.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	public showLoading = true;
	public title = "products-app";

	private _routeSubscription: Subscription;
	private urlHeadingMap: any;

	constructor(private auth: AuthService, private _router: Router) {
		console.log("auth: ", auth);
		this.auth.isAuthenticated$.subscribe(
			(payLoad) => (this.showLoading = false)
		);

		this.urlHeadingMap = {
			'/': 'Home',
			'/profile': 'Profile',
			'/logout': 'Logged Out',
			'/products': 'Products',
			'/products/single-view/[\s\S]{ 1,}': 'Product View',
	};
}

ngOnInit() {
	this._routeSubscription = this._router.events.subscribe((payload) => {
		this.title = this.urlHeadingMap[this._router.url];
	});
}
}
