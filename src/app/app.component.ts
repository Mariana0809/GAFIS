import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { LoginInstructorComponent } from './componets/login-instructor/login-instructor.component';

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet*/LoginInstructorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GAFIS';
}
