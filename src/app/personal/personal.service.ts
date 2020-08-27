import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../app-config.service';
import { ActionIndicatorService } from '../shared/action-indicator/action-indicator.service';

@Injectable()
export class PesronalService {
  
  constructor(
    private http: HttpClient, 
    private appConfig: AppConfigService,
    private actionIndicator: ActionIndicatorService) {}
  
  getExpenses(cb) {
    const headers = {
      token: this.appConfig.user.authToken
    }
    this.actionIndicator.onInit();
    this.http.get(`${this.appConfig.baseURL}/users/expense`, { observe: 'response', headers })
      .subscribe(response => {
        this.actionIndicator.onSuccess();
        cb(response);
      }, (error) => {
        this.actionIndicator.onFail('Unable fetch expenses!');
      });
  }
}