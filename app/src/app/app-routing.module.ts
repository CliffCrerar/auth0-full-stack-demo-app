import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { AuthGuard } from 'src/app/_guard/auth.guard';
import { HomeComponent } from 'src/app/home/home.component';
import { ProductsComponent } from 'src/app/products/products.component';
import { LogoutComponent } from 'src/app/logout/logout.component';
import { SingleViewComponent } from 'src/app/products/single-view/single-view.component';
import { FormComponent } from './products/form/form.component';

const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'products', component: ProductsComponent, canActivate: [AuthGuard], pathMatch: 'full' },
	{ path: 'products/single-view/:id', component: SingleViewComponent, canActivate: [AuthGuard], pathMatch: 'full' },
	{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], pathMatch: 'full'},
	{ path: 'products/form/:newOrEdit', component: FormComponent, canActivate: [AuthGuard], pathMatch: 'full'},
	{ path: 'products/form/:newOrEdit/:id', component: FormComponent, canActivate: [AuthGuard], pathMatch: 'full'},
	{ path: 'logout', component: LogoutComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],


	exports: [RouterModule]
})
export class AppRoutingModule { }
