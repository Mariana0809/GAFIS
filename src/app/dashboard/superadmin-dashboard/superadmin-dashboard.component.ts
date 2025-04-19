import { Component } from '@angular/core';
import { TopnavComponent } from "../../shared/topnav/topnav.component";
import { WelcomeComponent } from "../../shared/welcome/welcome.component";

@Component({
  selector: 'app-superadmin-dashboard',
  imports: [TopnavComponent, WelcomeComponent],
  templateUrl: './superadmin-dashboard.component.html',
  styleUrl: './superadmin-dashboard.component.css'
})
export class SuperadminDashboardComponent {

}
