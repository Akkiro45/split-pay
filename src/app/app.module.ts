import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionCardComponent } from './transaction-card/transaction-card.component';
import { ControlsComponent } from './controls/controls.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './groups/group/group.component';
import { MembersComponent } from './groups/group/members/members.component';
import { HistoryComponent } from './groups/group/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionCardComponent,
    ControlsComponent,
    GroupsComponent,
    GroupComponent,
    MembersComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
