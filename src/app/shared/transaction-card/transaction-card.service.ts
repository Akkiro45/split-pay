import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../../app-config.service';
import { ActionIndicatorService } from '../action-indicator/action-indicator.service';

@Injectable()
export class TransactionCardService {
  
  constructor(
    private http: HttpClient, 
    private appConfig: AppConfigService,
    private actionIndicator: ActionIndicatorService) {}
  
  settle(body: any, cb) {
    const headers = {
      token: this.appConfig.user.authToken
    }
    this.actionIndicator.onInit();
    this.http.patch(`${this.appConfig.baseURL}/users/settle-expenses`, body, { observe: 'response', headers })
      .subscribe(response => {
        this.actionIndicator.onSuccess();
        cb(response);
      }, (error) => {
        this.actionIndicator.onFail('Unable settle!');
      });
  }
}