import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  loggedIn: boolean

  constructor(
    private authService: AuthService,
    private socialAuthService: SocialAuthService,
    private router: Router
  ) { }

  canActivate(route, state: RouterStateSnapshot) {
    this.socialAuthService.authState.subscribe((user) => {
      if (user != null) {
        this.loggedIn = true;
      }
      else {
        this.loggedIn = false;
      }
    });
    if (this.loggedIn) {
      return true;
    }
    else {
      this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
