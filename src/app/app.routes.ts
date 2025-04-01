import { Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    { 
        path: 'dashboard', 
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      { 
        path: '**', 
        redirectTo: '' }

];
