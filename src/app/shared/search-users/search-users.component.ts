import { Component, OnInit } from '@angular/core';
import { SearchUsersService } from './search-users.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  search = '';
  users = [];
  searchUsers = [];

  constructor(private searchUsersService: SearchUsersService) { }

  ngOnInit(): void {
  }

  onSearch() {
    const body = {
      username: this.search
    }
    this.searchUsersService.searchUsers(body, (data) => {
      this.searchUsers.unshift(this.search);
    });
  }
  getUsers() {
    return this.users;
  }
  resetUsers() {
    this.users = [];
  }
  onAddUser(searchUser: string) {
    this.users = this.users.filter(user => user !== searchUser);
    this.users.unshift(searchUser);
    this.search = '';
    this.searchUsers = [];
  }
  onRmvUser(username: string) {
    this.users = this.users.filter(user => user !== username);
  }

}
