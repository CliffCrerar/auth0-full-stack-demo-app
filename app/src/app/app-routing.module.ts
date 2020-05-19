import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './_guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
