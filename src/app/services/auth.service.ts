import { Injectable } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider } from "angularx-social-login";
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../app-config.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private socialAuthService: SocialAuthService,
    private http: HttpClient,
    private appConfig: AppConfigService
  ) { }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  validateToken(authToken: string): boolean {
    let request = { token: authToken }
    this.http.post(this.appConfig.baseURL + '/auth/login', JSON.stringify(request), { observe: 'response' })
      .pipe(map(response => {
        //console.log(response);
      }))
      .subscribe(
        response => {
          //console.log(response);
        }, (error: Response) => {

        });
    return true;
  }

  isFirst(username: string): boolean {
    let request = { params: { input: username } };
    this.http.get(this.appConfig.baseURL + '/auth/login/validate-username', request)
      .pipe(map(response => {
        //
      }))
      .subscribe(
        response => {
          //console.log(response);
        }, (error: Response) => {

        });
    return true;
  }

  addUser(input: string): boolean {
    let request = { username: input };
    this.http.patch(this.appConfig.baseURL + '/auth/login/username/set', request, { observe: 'response' })
      .pipe(map(response => {
        //
      }))
      .subscribe(
        response => {
          //console.log(response);
        }, (error: Response) => {

        });
    return true;
  }

  signOut(user: string): void {
    let request = { username: user }
    this.socialAuthService.signOut();
    this.http.post(this.appConfig.baseURL + '/auth/logout', request, { observe: 'response' })
      .pipe(map(response => {
        //
      }))
      .subscribe(
        response => {
          console.log(response);
        }, (error: Response) => {
          if (error.status === 200) {
            console.log("Logged Out");
          }
        });
  }
}
