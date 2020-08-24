import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  @Input() users;
  showMembers: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
