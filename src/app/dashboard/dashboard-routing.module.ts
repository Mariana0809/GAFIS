import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { SuperadminDashboardComponent } from './superadmin-dashboard/superadmin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { HomeAdminComponent } from './admin-dashboard/components/home-admin/home-admin.component';
import { AsignacionesComponent } from './admin-dashboard/components/asignaciones/asignaciones.component';
import { FormacionesComponent } from './admin-dashboard/components/formaciones/formaciones.component';
import { InstructoresComponent } from './admin-dashboard/components/instructores/instructores.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, 
    children: [
      {
        path: 'instructor',
        component: InstructorDashboardComponent
      },
      {
        path: 'admin',
        component: AdminDashboardComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: HomeAdminComponent },
          { path: 'asignaciones', component: AsignacionesComponent },
          { path: 'formaciones', component: FormacionesComponent },
          { path: 'instructores', component: InstructoresComponent },
          //{ path: 'formaciones', component: FormacionesComponent },
          //{ path: 'instructores', component: InstructoresComponent }
        ]
      },
      {
        path: 'superadmin',
        component: SuperadminDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

