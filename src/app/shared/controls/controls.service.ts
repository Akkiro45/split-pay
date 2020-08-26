import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../../app-config.service';
import { ActionIndicatorService } from '../action-indicator/action-indicator.service';

@Injectable()
export class ControlsService {

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
    private actionIndicator: ActionIndicatorService) { }

  postMyExpense(body: {}, cb) {
    this.actionIndicator.onInit();
    this.http.post(`${this.appConfig.baseURL}/users/expense`, body, { observe: 'response' })
      .subscribe((response) => {
        this.actionIndicator.onSuccess();
        cb(response);
      }, (error) => {
        this.actionIndicator.onFail('Unable to add!');
      });
  }

  postShareExpense(body: {}, cb) {
    this.actionIndicator.onInit();
    this.http.post(`${this.appConfig.baseURL}/users/expense/shared`, body, { observe: 'response' })
      .subscribe((response) => {
        this.actionIndicator.onSuccess();
        cb(response);
      }, (error) => {
        this.actionIndicator.onFail('Unable to share expense!');
      });
  }

}