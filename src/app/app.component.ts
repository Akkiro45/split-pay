import { Component } from '@angular/core';
import { ActionIndicatorService } from './shared/action-indicator/action-indicator.service';
import { AppConfigService } from './app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'split-pay-ui';

  constructor(
    public actionIndicator: ActionIndicatorService,
    public appConfig: AppConfigService
  ) { }
}
