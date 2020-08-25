import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  users = [
    { user_id: 1, username: 'username1', email: 'some@email.com' },
    { user_id: 2, username: 'username2', email: 'some@email.com' },
    { user_id: 3, username: 'username3', email: 'some@email.com' },
  ]
  payment_history = [
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974 },
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974 },
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974 },
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974 },
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974, my: true },
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974 },
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974, my: true },
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974 },
    { amount: 1000, description: 'Lunch', timestamp: 1598267450974, my: true },
  ]

  constructor() { }

  ngOnInit(): void { }
  
}
