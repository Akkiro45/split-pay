import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../app-config.service';
import { ActionIndicatorService } from '../shared/action-indicator/action-indicator.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PesronalService {
  
  constructor(
    private http: HttpClient, 
    private appConfig: AppConfigService,
    private actionIndicator: ActionIndicatorService) {}
  
  getExpenses(cb) {
    const headers = {
      token: this.appConfig.user.idToken
    }
    this.actionIndicator.onInit();
    this.http.get(`${this.appConfig.baseURL}/users/expenses`, { observe: 'response', headers })
      .pipe(map(response => {
        if(Array.isArray(response.body)) {
          return response.body.map(transaction => {
            return {
              amount: transaction.amount,
              description: transaction.description,
              timestamp: transaction.created_at,
              isPaid: transaction.is_paid === 1 ? true : false,
              id: transaction.id
            }
          })  
        } else {
          return [];
        }
      }))
      .subscribe(response => {
        this.actionIndicator.onSuccess();
        cb(response);
      }, (error) => {
        this.actionIndicator.onFail('Unable fetch expenses!');
      });
  }
}