import { Component, OnInit, Input, ElementRef, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, OnChanges {

  @ViewChild('scrollMe') private historyScroll: ElementRef;
  @Input() showSettleBtn;
  @Input() history;
  transactionHistory = [];  
  search: string = '';

  constructor() { }

  ngOnInit(): void {
    this.transactionHistory = this.history;
    this.scrollToBottom();
  }
  ngAfterViewChecked() {        
    this.scrollToBottom();        
  }
  ngOnChanges(changes: SimpleChanges) {
    this.transactionHistory = changes.history.currentValue;
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
        if(pattern.test(transaction.amount) || pattern.test(transaction.description)) {
          return true;
        } else {
          false;
        }
      });
    } else {
      this.transactionHistory = this.history;
    }
  }

}
