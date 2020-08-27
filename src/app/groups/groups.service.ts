import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppConfigService } from '../app-config.service';
import { ActionIndicatorService } from '../shared/action-indicator/action-indicator.service';

@Injectable()
export class GroupsService {

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
    private actionIndicator: ActionIndicatorService) { }

  getGroups(cb) {
    this.actionIndicator.onInit();
    this.http.get(`${this.appConfig.baseURL}/groups/all`, { observe: 'response' })
      .pipe(map(response => {
        return response.body;
      }))
      .subscribe(response => {
        this.actionIndicator.onSuccess();
        cb(response);
      }, (error) => {
        this.actionIndicator.onFail('Unable fetch groups!');
      });
  }

  createGroup(body, cb) {
    this.actionIndicator.onInit();
    this.http.post(`${this.appConfig.baseURL}/groups/create`, body, { observe: 'response' })
      .subscribe(response => {
        this.actionIndicator.onSuccess();
        cb(response);
      }, (error) => {
        this.actionIndicator.onFail('Unable create group!');
      });
  }

  getGroup(id, cb) {
    this.actionIndicator.onInit();
    this.http.get(`${this.appConfig.baseURL}/groups/${id}`, { observe: 'response' })
      .pipe(map(response => {
        return {
          payment_history: response.body['payment_history'],
          users: response.body['users'],
          name: response.body['name']
        };
      }))
      .subscribe(response => {
        this.actionIndicator.onSuccess();
        cb(response);
      }, (error) => {
        this.actionIndicator.onFail('Unable fetch group!');
      });
  }

  createGroupExpense(body, cb) {
    this.actionIndicator.onInit();
    this.http.post(`${this.appConfig.baseURL}/groups/expense`, body, { observe: 'response' })
      .subscribe(response => {
        this.actionIndicator.onSuccess();
        cb(response);
      }, (error) => {
        this.actionIndicator.onFail('Unable create group expense!');
      });
  }
}