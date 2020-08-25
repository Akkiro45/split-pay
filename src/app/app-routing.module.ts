import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { PersonalComponent } from './personal/personal.component';
import { UsernameFormComponent } from './username-form/username-form.component'
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './groups/group/group.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'username',
    component: UsernameFormComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'groups',
    component: GroupsComponent
  },
  { 
    path: 'groups/:id', 
    component: GroupComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
