import { Injectable } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider } from "angularx-social-login";
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../app-config.service';
import { map } from 'rxjs/operators';
import { ActionIndicatorService } from '../shared/action-indicator/action-indicator.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private socialAuthService: SocialAuthService,
    private http: HttpClient,
    private appConfig: AppConfigService,
    private actionIndicator: ActionIndicatorService
  ) { }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  validateToken(idToken: string, cb): void {
    let request = { token: idToken };
    const headers = { token: idToken };
    this.http.post(this.appConfig.baseURL + '/auth/login', {}, { observe: 'response', headers })
      .pipe(map(response => {
        if (response.status === 200) {
          return true;
        }
        else if (response.status === 400) {
          return false;
        }
      }))
      .subscribe(
        response => {
          cb(response);
        }
      );
  }

  isFirst(username: string, cb): void {
    let request = { input: username };
    this.http.post(this.appConfig.baseURL + '/auth/login/validate-username', request, { observe: 'response' })
      .subscribe(
        response => {
          cb(response);
        }, error => {
          cb(error);
        }
      );
  }

  addUser(input: string, cb): void {
    this.actionIndicator.onInit();
    let request = { username: input };
    const headers = {
      token: this.appConfig.user.idToken
    }
    this.http.patch(this.appConfig.baseURL + '/auth/login/username/set', request, { observe: 'response', headers })
      .pipe(map(response => {
        return (response.status === 200)
      }))
      .subscribe(
        response => {
          this.actionIndicator.onSuccess();
          cb(response);
        }, (error: Response) => {
          this.actionIndicator.onFail('Error, Username not updated!!');
        }
      );
  }

  signOut(user: string): void {
    this.actionIndicator.onInit();
    let request = { username: user }
    this.socialAuthService.signOut();
    const headers = {
      token: this.appConfig.user.idToken
    }
    this.http.post(this.appConfig.baseURL + '/auth/logout', request, { observe: 'response', headers })
      .pipe(map(response => {
        //
      }))
      .subscribe(
        response => {
          this.actionIndicator.onSuccess();
        }, (error: Response) => {
          if (error.status === 200) {
            this.actionIndicator.onFail('Error while logging out!!');
          }
        }
      );
  }
}
