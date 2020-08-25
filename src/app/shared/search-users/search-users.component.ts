import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  search = '';
  users = [];
  searchUsers = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    const tempUsers = [
      'akshay',
      'rohit',
      'virat',
      'dhoni'
    ]
    if(tempUsers.includes(this.search)) {
      this.searchUsers.unshift(this.search);
    }
  }
  getUsers() {
    return this.users;
  }
  resetUsers() {
    this.users = [];
  }
  onAddUser() {
    this.users = this.users.filter(user => user !== this.search);
    this.users.unshift(this.search);
    this.search = '';
    this.searchUsers = [];
  }

}
