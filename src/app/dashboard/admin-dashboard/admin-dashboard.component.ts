import { Component } from '@angular/core';
import { TopnavComponent } from "../../shared/topnav/topnav.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  imports: [CommonModule, RouterModule, TopnavComponent]
})
export class AdminDashboardComponent {

}
