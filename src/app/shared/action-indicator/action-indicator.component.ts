import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-indicator',
  templateUrl: './action-indicator.component.html',
  styleUrls: ['./action-indicator.component.css']
})
export class ActionIndicatorComponent implements OnInit {

  @Input() loading: boolean;
  @Input() error: any;
  @Input() show: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
