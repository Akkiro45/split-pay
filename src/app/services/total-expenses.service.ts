import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../app-config.service';
import { ActionIndicatorService } from '../shared/action-indicator/action-indicator.service';
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TotalExpensesService {

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
    private actionIndicator: ActionIndicatorService,
    private router: Router
  ) { }

  getExpenses(cb) {
    this.actionIndicator.onInit();
    this.http.get(this.appConfig.baseURL + '/users/total-expenses', { observe: 'response' })
      .pipe(map(response => {
        return {
          owed_total: response.body['owed_total'],
          expenses_total: response.body['expenses_total'],
          owing_total: response.body['owing_total']
        };
      }))
      .subscribe(response => {
        this.actionIndicator.onSuccess();
        cb(response);
      }, (error) => {
        this.actionIndicator.onFail('Update username!');
        if (error.status === 405) {
          this.router.navigate(['/username']);
        }
      });
  }

  getOwedToOthers(cb) {
    this.http.get(this.appConfig.baseURL + '/users/owes', { observe: 'response' })
      .pipe(map(response => {
        return response.body;
      }))
      .subscribe(response => {
        cb(response);
      });
  }

  getOwedToMe(cb) {
    this.http.get(this.appConfig.baseURL + '/users/owed', { observe: 'response' })
      .pipe(map(response => {
        return response.body;
      }))
      .subscribe(response => {
        cb(response);
      });
  }
}
