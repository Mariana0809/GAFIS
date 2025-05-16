import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BackgroundComponent } from './background/background.component';




@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule
  ],
})
export class SharedModule { }
