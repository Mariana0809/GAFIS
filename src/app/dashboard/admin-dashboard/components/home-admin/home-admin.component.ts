import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { WelcomeComponent } from "../../../../shared/welcome/welcome.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [CommonModule, RouterModule,CarouselComponent, WelcomeComponent, NavbarComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {

}
