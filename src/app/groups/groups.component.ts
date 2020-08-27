import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GroupsService } from './groups.service';

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
    // { id: 1, name: 'group1', members: 5 },
  ];

  constructor(private router: Router, private groupsService: GroupsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.fetchGroups();
    }, 100);
  }

  fetchGroups() {
    this.groupsService.getGroups((data) => {
      this.groups = data;
    });
  }
  onCreateGroup() {
    const users = this.usersComp.getUsers();
    if(users.length && this.groupName !== '') {
      const body = {
        name: this.groupName,
        members: users
      }
      this.groupsService.createGroup(body, (data) => {
        console.log(data);
        this.groupName = '';
        this.usersComp.resetUsers();
        this.modal.toggleModal();
        this.fetchGroups();
      });
    }
  }

}
