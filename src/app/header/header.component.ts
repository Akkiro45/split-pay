import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SocialUser, SocialAuthService } from "angularx-social-login";
import { Router, ActivatedRoute } from "@angular/router";
import { AppConfigService } from '../app-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input() user: SocialUser;
  loggedIn: boolean;
  idToken: any;
  tokenValidated: boolean;
  isFirst: boolean;
  username = null;


  constructor(
    private authService: AuthService,
    private socialAuthService: SocialAuthService,
    private router: Router,
    private route: ActivatedRoute,
    public appConfig: AppConfigService
  ) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.setValues(changes.user.currentValue);
  }

  setValues(user) {
    this.loggedIn = (user != null);
    if(this.loggedIn) {
      this.username = user.firstName;
    }
  }
  signOut(): void {
    this.authService.signOut();
  }
}

$(document).ready(function () {
  (<any>$('.sidenav')).sidenav();
});