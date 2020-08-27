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

  constructor(
    private expService: TotalExpensesService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.fetchExpenses();
    }, 100);
  }

  fetchExpenses() {
    this.expService.getExpenses((data) => {
      this.owed_total = data['owed_total'],
        this.expenses_total = data['expenses_total'],
        this.owing_total = data['owing_total']
    });
  }
}
