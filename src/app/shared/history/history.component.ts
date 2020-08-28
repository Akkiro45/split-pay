import { Component, OnInit, Input, ElementRef, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, OnChanges {

  @ViewChild('scrollMe') private historyScroll: ElementRef;
  @Input() showSettleBtn;
  @Input() history;
  @Output() settle = new EventEmitter();
  transactionHistory = [];  
  search: string = '';

  constructor() { }

  ngOnInit(): void {
    this.transactionHistory = this.filterTransaction(this.history);
    this.scrollToBottom();
  }
  ngAfterViewChecked() {        
    this.scrollToBottom();        
  }
  ngOnChanges(changes: SimpleChanges) {
    this.transactionHistory = this.filterTransaction(changes.history.currentValue);
  }

  filterTransaction(history) {
    return history.filter(transaction => transaction.amount !== 0);
  }
  scrollToBottom(): void {
    try {
      this.historyScroll.nativeElement.scrollTop = this.historyScroll.nativeElement.scrollHeight;
    } catch(err) { }                 
  }
  onSearch() {
    const pattern = new RegExp(this.search, 'i');
    if(this.search !== '') {
      this.transactionHistory = this.history.filter(transaction => {
        if(transaction.amount > 0) {
          if(pattern.test(transaction.amount) || pattern.test(transaction.description)) {
            return true;
          } else {
            false;
          }
        }
      });
    } else {
      this.transactionHistory = this.filterTransaction(this.history);
    }
  }

}
