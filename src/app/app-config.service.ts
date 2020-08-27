import { Injectable } from '@angular/core';
import { SocialUser } from "angularx-social-login";

@Injectable()
export class AppConfigService {
  baseURL: string = 'https://splitpaydemo1.herokuapp.com/api';
  user: SocialUser;

  setUser(user: SocialUser) {
    this.user = user;
  }

}