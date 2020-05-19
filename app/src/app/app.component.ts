import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'products-app';
  showLoading = true;
  constructor(private auth: AuthService){
    console.log('auth: ', auth);
    this.auth.isAuthenticated$.subscribe(payLoad=>this.showLoading = false)
  }
}
