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

  // onSearch() {
  //   const tempUsers = [
  //     'akshay',
  //     'rohit',
  //     'virat',
  //     'dhoni'
  //   ]
  //   if(tempUsers.includes(this.search)) {
  //     this.searchUsers.unshift(this.search);
  //   }
  // }
  onSearch() {
    const body = {
      username: this.search
    }
    this.searchUsersService.searchUsers(body, (data) => {
      this.searchUsers.unshift(data);
    });
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
