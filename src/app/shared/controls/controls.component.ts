import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  @Input() showSettleBtn: boolean;
  @Output() onAction = new EventEmitter();
  controlsForm: FormGroup = new FormGroup({
    amount: new FormControl('', Validators.compose([
      Validators.required,
      Validators.min(1)
    ])),
    description: new FormControl('', Validators.required)
  }); 

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick(isExpense: boolean) {
    let body = {
      amount: this.controlsForm.value.amount,
      description: this.controlsForm.value.description,
      isPaid: !isExpense
    }
    this.onAction.emit({
      body,
      isExpense
    });
    this.controlsForm.reset();
  }
}
