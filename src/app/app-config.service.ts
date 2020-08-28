import { Injectable } from '@angular/core';
import { SocialUser } from "angularx-social-login";

@Injectable()
export class AppConfigService {
  baseURL: string = 'https://splitpaydemo2.herokuapp.com/api';
  user: SocialUser;
  
}