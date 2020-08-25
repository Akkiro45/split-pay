import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  isVisible: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.isVisible = !this.isVisible;
  }
  stopPropagation(event) {
    event.stopPropagation();
  }

}
