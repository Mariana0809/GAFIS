import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { SuperadminDashboardComponent } from './superadmin-dashboard/superadmin-dashboard.component';

const routes: Routes = [
  { 
    path: 'instructor', 
    component: InstructorDashboardComponent },
  { 
    path: 'admin', 
    component: AdminDashboardComponent },
  { 
    path: 'superadmin', 
    component: SuperadminDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
