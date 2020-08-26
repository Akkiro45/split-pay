import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() isVisible: boolean;
  @Input() restrictToggle: boolean;
  constructor() { }

  ngOnInit(): void {
    this.isVisible = false;
  }

  toggleModal() {
    if(!this.restrictToggle) {
      this.isVisible = !this.isVisible;
    }
  }
  stopPropagation(event) {
    event.stopPropagation();
  }

}
