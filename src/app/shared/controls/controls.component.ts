import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  controlsForm: FormGroup = new FormGroup({
    amount: new FormControl('', Validators.compose([
      Validators.required,
      Validators.min(1)
    ])),
    description: new FormControl('', Validators.required)
  }); 
  @Input() showSettleBtn: boolean;
  @Input() useCustomHandler: boolean;
  @Output() onExpenseClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick(isExpense) {
    if(isExpense) {
      if(this.useCustomHandler) {
        this.onExpenseClick.emit({
          amount: this.controlsForm.value.amount,
          description: this.controlsForm.value.description
        });
      } else {
        console.log('add expense');
      }  
    } else {
      console.log('add settle');
    }
    this.controlsForm.reset();
  }
}
