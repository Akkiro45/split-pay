import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { PersonalComponent } from './personal/personal.component';
import { UsernameFormComponent } from './username-form/username-form.component'
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './groups/group/group.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'username',
    component: UsernameFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'personal',
    component: PersonalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'groups',
    component: GroupsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'groups/:id',
    component: GroupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
