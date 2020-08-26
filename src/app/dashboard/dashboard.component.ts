import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { TotalExpensesService } from '../services/total-expenses.service';
import { Router, ActivatedRoute } from "@angular/router";

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
    private expService: TotalExpensesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.expService.getExpenses()
      .subscribe(respose => {
        this.owed_total = respose.valueOf()['owed_total'];
        this.expenses_total = respose.valueOf()['expenses_total'];
        this.owing_total = respose.valueOf()['owing_total'];
      }, (error: Response) => {
        if (error.status === 405) {
          this.router.navigate(['/username']);
        }
      });
  }
}
