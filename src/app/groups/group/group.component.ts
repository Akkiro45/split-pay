import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  users = [
    // { user_id: 1, username: 'username1', email: 'some@email.com' },
  ]
  payment_history = [
    // { amount: 1000, description: 'Lunch', timestamp: 1598267450974, my: true },
  ]

  constructor(private groupsService: GroupsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.fetchGroup();
    }, 100);
  }
  
  onGroupExpense(data) {
    const body = {
      group_id: this.route.snapshot.params['id'],
      amount: data.body.amount,
      description: data.body.description
    }
    this.groupsService.createGroupExpense(body, (data) => {
      this.fetchGroup();
    });
  }

  fetchGroup() {
    const id = this.route.snapshot.params['id'];
    this.groupsService.getGroup(id, (data) => {
      this.payment_history = data.payment_history,
      this.users = data.users
    });
  }

}
