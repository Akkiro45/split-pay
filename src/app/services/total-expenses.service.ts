import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class TotalExpensesService {

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService
  ) { }

  getExpenses() {
    return this.http.get(this.appConfig.baseURL + '/users/total-expenses');
  }
}
