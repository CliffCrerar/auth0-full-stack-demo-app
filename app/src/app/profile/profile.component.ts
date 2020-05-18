import { Component, OnInit, OnDestroy } from '@angular/core';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { AuthService } from '../_services/auth.service';
import { Subscription } from 'rxjs';
import { ProfileModel } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public profileModel: ProfileModel;
  private _profilesSubscription: Subscription;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    console.log(this.auth.userProfile$);
    this._profilesSubscription = this.auth.userProfile$.subscribe(
      ({ nickname, name, picture, updated_at, email, email_verified, sub }) =>
        this.profileModel = new ProfileModel(nickname, name, picture, updated_at, email, email_verified, sub));
  }

  ngOnDestroy() {
    this._profilesSubscription.unsubscribe();
  }

}
