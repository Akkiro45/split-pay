import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SocialUser, SocialAuthService } from "angularx-social-login";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  idToken: any;
  tokenValidated: boolean;
  isFirst: boolean;
  username = null;


  constructor(
    private authService: AuthService,
    private socialAuthService: SocialAuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      console.log(user.idToken);
      this.loggedIn = (user != null);
      this.username = localStorage.getItem("key");
    });
  }


  signOut(username): void {
    this.authService.signOut(username);
  }
}

$(document).ready(function () {
  (<any>$('.sidenav')).sidenav();
});