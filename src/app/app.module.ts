import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TransactionCardComponent } from './shared/transaction-card/transaction-card.component';
import { ControlsComponent } from './shared/controls/controls.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './groups/group/group.component';
import { MembersComponent } from './groups/group/members/members.component';
import { HistoryComponent } from './shared/history/history.component';
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalComponent } from './personal/personal.component';
import { UsernameFormComponent } from './username-form/username-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionCardComponent,
    ControlsComponent,
    GroupsComponent,
    GroupComponent,
    MembersComponent,
    HistoryComponent,
    HeaderComponent,
    SideNavComponent,
    LandingComponent,
    DashboardComponent,
    PersonalComponent,
    UsernameFormComponent
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
