import { Component } from '@angular/core';
import { TopnavComponent } from "../../shared/topnav/topnav.component";
import { WelcomeComponent } from "../../shared/welcome/welcome.component";
import { CalendarComponent } from "../../shared/calendar/calendar.component";

@Component({
  selector: 'app-instructor-dashboard',
  imports: [TopnavComponent, WelcomeComponent, CalendarComponent],
  templateUrl: './instructor-dashboard.component.html',
  styleUrl: './instructor-dashboard.component.css'
})
export class InstructorDashboardComponent {

}
