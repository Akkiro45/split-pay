import { Component, OnInit, ViewChild } from '@angular/core';
import { ControlsService } from '../shared/controls/controls.service';
import { PesronalService } from './personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  @ViewChild('modal') modal;
  @ViewChild('users') usersComp;
  payment_history = [
    // { id: 1, amount: 1000, description: 'Lunch', timestamp: 1598267450974, isPaid: true, my: true },
  ]

  constructor(private controlsService: ControlsService, private pesronalService: PesronalService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.fetchExpenses();
    }, 100);
  }

  onShareExpense(data: any) {
    let users = this.usersComp.getUsers();
    users = users.map(user => {
      return {  
        username: user
      }
    });
    if(users.length > 0) {
      const body = {
        members: users,
        initial_paid_amount: data.body.amount,
        description: data.body.description
      }
      this.controlsService.postShareExpense(body, () => {
        this.fetchExpenses();
        this.usersComp.resetUsers();
        this.modal.toggleModal();
      });
    }
  }
  onMyExpense(data: any) {
    this.controlsService.postMyExpense(data.body, () => {
      this.fetchExpenses();
    });
  }
  fetchExpenses() {
    this.pesronalService.getExpenses((data) => {
      if(data) {
        this.payment_history = data;
      }
    });
  }
}
