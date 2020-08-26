import { Injectable } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from "angularx-social-login";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://splitpaydemo1.herokuapp.com/api/';

  constructor(
    private socialAuthService: SocialAuthService,
    private http: HttpClient
  ) { }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  validateToken(authToken): boolean {
    let request = { token: authToken }
    this.http.post(this.baseUrl + 'auth/login', JSON.stringify(request))
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

  isFirst(username): boolean {
    let request = { params: { input: username } };
    this.http.get(this.baseUrl + 'auth/login/validate-username', request).subscribe(
      response => {
        //console.log(response);
      }, (error: Response) => {

      });
    return true;
  }

  addUser(input): boolean {
    let request = { username: input };
    this.http.patch(this.baseUrl + 'auth/login/username/set', request).subscribe(
      response => {
        //console.log(response);
      }, (error: Response) => {

      });
    return true;
  }

  signOut(user): void {
    let request = { username: user }
    this.socialAuthService.signOut();
    this.http.post(this.baseUrl + '/auth/logout', request).subscribe(
      response => {
        console.log(response);
      }, (error: Response) => {
        if (error.status === 200) {
          console.log("Logged Out");
        }
      });
  }
}
