import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {
  baseURL: string = 'https://splitpaydemo1.herokuapp.com/api';
}