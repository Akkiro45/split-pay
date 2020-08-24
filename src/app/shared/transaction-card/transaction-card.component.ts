import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.css']
})
export class TransactionCardComponent implements OnInit {

  @Input() amount: number;
  @Input() description: string;
  @Input() isExpense: boolean;
  @Input() showBtn: boolean;
  @Input() timeStamp: number;
  @Input() id: string;
  time: string;

  constructor() { }

  ngOnInit(): void {
    this.time = moment(this.timeStamp).format('ddd, MMM D YYYY, h:mm a'); // Mon, Aug 24 2020, 4:40 pm
  }

  onSettle() {
    console.log(this.id);
  }

}
