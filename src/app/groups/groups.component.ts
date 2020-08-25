import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups = [
    { id: 1, name: 'group1', members: 5 },
    { id: 2, name: 'group2', members: 52 },
    { id: 3, name: 'group3', members: 25 },
    { id: 4, name: 'group4', members: 3 },
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
