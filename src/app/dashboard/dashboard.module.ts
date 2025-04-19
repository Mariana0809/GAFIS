import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SuperadminDashboardComponent } from './superadmin-dashboard/superadmin-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeAdminComponent } from './admin-dashboard/components/home-admin/home-admin.component';
import { AsignacionesComponent } from './admin-dashboard/components/asignaciones/asignaciones.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    InstructorDashboardComponent,
    AdminDashboardComponent,
    SuperadminDashboardComponent,
    HomeAdminComponent,
    AsignacionesComponent
  ]
})
export class DashboardModule {}
