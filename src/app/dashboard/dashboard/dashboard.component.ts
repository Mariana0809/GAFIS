import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackgroundComponent } from '../../shared/background/background.component';
import { FooterComponent } from "../../shared/footer/footer.component";


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, BackgroundComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
