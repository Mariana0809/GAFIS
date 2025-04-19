import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
//import { BackgroundComponent } from './shared/background/background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public router: Router) {}
}



