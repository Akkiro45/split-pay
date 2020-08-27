import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppConfigService } from '../../app-config.service';
import { ActionIndicatorService } from '../action-indicator/action-indicator.service';

@Injectable()
export class SearchUsersService {
  
  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
    private actionIndicator: ActionIndicatorService) { }

  searchUsers(body: {}, cb) {
    const headers = {
      token: this.appConfig.user.authToken
    }
    this.http.post(`${this.appConfig.baseURL}/users/search`, body, { observe: 'response', headers })
      .pipe(map(response => {
        return response.body['username'];
      }))
      .subscribe((response) => {
        cb(response);
      }, (error) => {
        this.actionIndicator.onFail('Unable to search user!');
      });
  }

}