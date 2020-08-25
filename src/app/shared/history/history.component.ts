import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @ViewChild('scrollMe') private historyScroll: ElementRef;
  @Input() showSettleBtn;
  @Input() history;

  constructor() { }

  ngOnInit(): void {
    this.scrollToBottom();
  }
  ngAfterViewChecked() {        
    this.scrollToBottom();        
  }
  scrollToBottom(): void {
    try {
      this.historyScroll.nativeElement.scrollTop = this.historyScroll.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

}
