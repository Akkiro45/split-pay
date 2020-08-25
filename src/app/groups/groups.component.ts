import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  @ViewChild('modal') modal;
  @ViewChild('users') usersComp;
  groupName: string = '';
  groups = [
    { id: 1, name: 'group1', members: 5 },
    { id: 2, name: 'group2', members: 52 },
    { id: 3, name: 'group3', members: 25 },
    { id: 4, name: 'group4', members: 3 },
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  onCreateGroup() {
    const users = this.usersComp.getUsers();
    if(users.length && this.groupName !== '') {
      this.groups.unshift({
        id: this.groups.length,
        name: this.groupName,
        members: users.length
      });
      this.groupName = '';
      this.usersComp.resetUsers();
      this.modal.toggleModal();
    }
  }

}
