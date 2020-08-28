import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from "angularx-social-login";
import { AppConfigService } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  loggedIn: boolean

  constructor(
    private authService: AuthService,
    private socialAuthService: SocialAuthService,
    private router: Router,
    private appConfig: AppConfigService
  ) { }

  canActivate(route, state: RouterStateSnapshot) {
    const user = JSON.parse(localStorage.getItem('user'));
    this.appConfig.user = user;
    this.loggedIn = user ? true : false;
    // this.socialAuthService.authState.subscribe((user) => {
    //   if (user != null) {
    //     this.loggedIn = true;
    //   }
    //   else {
    //     this.loggedIn = false;
    //   }
    // });
    if (this.loggedIn) {
      return true;
    }
    else {
      this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
