import { Injectable } from '@angular/core';
import { SocialUser } from "angularx-social-login";

@Injectable()
export class AppConfigService {
  baseURL: string = 'https://splitpaydemo4.herokuapp.com/api';
  user: SocialUser;
  
}