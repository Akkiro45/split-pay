import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  @ViewChild('modal') modal;
  @ViewChild('users') usersComp;
  payment_history = [
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974 },
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974 },
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974 },
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974, isPaid: true },
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974, my: true },
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974 },
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974, my: true },
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974, isPaid: true },
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974, isPaid: true, my: true },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onExpense(data) {
    console.log(data);
    const users = this.usersComp.getUsers();
    this.usersComp.resetUsers();
    this.modal.toggleModal();
  }
}
