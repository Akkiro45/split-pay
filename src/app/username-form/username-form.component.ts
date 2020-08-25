import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.css']
})
export class UsernameFormComponent implements OnInit {

  controlsForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick(isValid) {
    if (isValid) {
      console.log('User Added');
    } else {
      console.log('Invalid Username');
    }
    this.controlsForm.reset();
  }

}
