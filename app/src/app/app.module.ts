import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './_services/interceptor.service';
import { LogoutComponent } from './logout/logout.component';
import { AuthComponentLogo } from 'src/app/generic/auth0-logo.component';
import { TableComponent } from './products/table/table.component';
import { FormComponent } from './products/form/form.component';
import { SingleViewComponent } from './products/single-view/single-view.component';
import { MobileNavComponent } from './generic/mobile-nav.component';

@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent,
		ProfileComponent,
		HomeComponent,
		ProductsComponent,
		LogoutComponent,
		AuthComponentLogo,
		TableComponent,
		FormComponent,
		SingleViewComponent,
		MobileNavComponent
	],
	imports: [

	BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		useClass: InterceptorService,
		multi: true
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
