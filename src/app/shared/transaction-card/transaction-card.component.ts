import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() settle = new EventEmitter();
  time: string;

  constructor(
    private transactionCardService: TransactionCardService,
    private personalService: PesronalService) { }

  ngOnInit(): void {
  }

  onSettle() {
    const body = {
      expense_id: this.id,
      amount: this.amount
    }
    this.transactionCardService.settle(body, () => {
      this.settle.emit();
    });
  }

}
