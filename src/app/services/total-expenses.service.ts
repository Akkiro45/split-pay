import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TotalExpensesService {

  baseUrl = 'https://splitpaydemo1.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  getExpenses() {
    return this.http.get(this.baseUrl + 'users/total-expenses');
  }
}
