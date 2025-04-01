import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SuperadminDashboardComponent } from './superadmin-dashboard/superadmin-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InstructorDashboardComponent,
    AdminDashboardComponent,
    SuperadminDashboardComponent,
  ]
})
export class DashboardModule {}
