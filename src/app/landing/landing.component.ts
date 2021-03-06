import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SocialUser, SocialAuthService } from "angularx-social-login";
import { Router, ActivatedRoute } from "@angular/router";
import { AppConfigService } from '../app-config.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  tokenValidated: boolean;

  constructor(
    private authService: AuthService,
    private socialAuthService: SocialAuthService,
    private router: Router,
    private route: ActivatedRoute,
    private appConfig: AppConfigService
  ) { }

  ngOnInit(): void { }

  signIn(): void {
    this.authService.signInWithGoogle();
    this.socialAuthService.authState.subscribe((user) => {
      this.loggedIn = (user != null);
      if (this.loggedIn) { 
        this.authService.validateToken(user.idToken, (data) => {
          if (data) {
            this.user = user;
            this.appConfig.user = user;
            localStorage.setItem('user', JSON.stringify(user));
            let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
            this.router.navigate([returnUrl || '/dashboard']);
          }
          else {
            this.router.navigate(['/']);;
          }
        });
      }
      else {
        this.router.navigate(['/']);;
      }
    });
  }

}
