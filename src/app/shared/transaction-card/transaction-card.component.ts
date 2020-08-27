import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { TransactionCardService } from './transaction-card.service';
import { PesronalService } from 'src/app/personal/personal.service';

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

  constructor(
    private transactionCardService: TransactionCardService,
    private personalService: PesronalService) { }

  ngOnInit(): void {
    // this.time = moment(this.timeStamp).format('ddd, MMM D YYYY, h:mm a'); // Mon, Aug 24 2020, 4:40 pm
    // this.time = this.timeStamp;
  }

  onSettle() {
    const body = {
      expense_id: this.id,
      amount: this.amount
    }
    this.transactionCardService.settle(body, () => {
      this.personalService.getExpenses(() => {
        console.log('fetched!');
      });
    });
  }

}
