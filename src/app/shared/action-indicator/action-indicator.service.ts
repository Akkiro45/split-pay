import { Injectable } from '@angular/core';

@Injectable() 
export class ActionIndicatorService {
  
  showIndicator: boolean = false;
  loading: boolean = false;
  error: any = null;

  onInit() {
    this.showIndicator = true;
    this.loading = true;
  }
  onSuccess() {
    this.loading = false;
    this.showIndicator = false;
  }
  onFail(error) {
    this.error = error;
    this.loading = false;
    setTimeout(() => {
      this.showIndicator = false;
      this.error = null;
    }, 3000);
  }
}