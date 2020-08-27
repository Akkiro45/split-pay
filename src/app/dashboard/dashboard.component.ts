import { Component, OnInit } from '@angular/core';
import { TotalExpensesService } from '../services/total-expenses.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  owed_total: number;
  expenses_total: number;
  owing_total: number;

  usersOwedTo = [
    // { username: 1, amount: 1000 },
  ];

  usersOwing = [
    // { user_id: 1, username: "Gurpreet", amount: 2000 }
  ];

  constructor(
    private expService: TotalExpensesService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.fetchExpenses();
      this.owedToOthers();
      this.owedToMe();
    }, 100);
  }

  fetchExpenses() {
    this.expService.getExpenses((data) => {
      console.log(data)
      this.owed_total = data['owed_total'],
        this.expenses_total = data['expenses_total'],
        this.owing_total = data['owing_total']
    });
  }

  owedToOthers() {
    this.expService.getOwedToOthers((data) => {
      this.usersOwedTo = data;
    });
  };

  owedToMe() {
    this.expService.getOwedToMe((data) => {
      this.usersOwing = data;
    });
  };
}
