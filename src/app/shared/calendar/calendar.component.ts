import { Component, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports:[
    FullCalendarModule
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  
})
export class CalendarComponent implements OnInit {

 public events: any[];
 public options:any;

  constructor() { }

  ngOnInit() {

    this.options={

      plugins:[dayGridPlugin,timeGridPlugin,interactionPlugin],
      defaultDate:new Date(),
      locale: esLocale,
      header:{
        left:'prev,next',
        center:'title',
        rigth: 'dayGridMonth, timeGridweek, timeGridDay'
      },
      editable:false
    }

    this.events=[
      {
        tite: "Evento 1",
        start:new Date(),
        description: "Evento 1"
      },
      {
        tite: "Evento 2",
        start:new Date(new Date().getTime() + 86400000),
        description: "Evento 2"
      },
      {
        tite: "Evento 3",
        start:new Date(new Date().getTime() + (86400000*2)),
        end:new Date(new Date().getTime() + (86400000*3)),
        description: "Evento 3"
      },
    ]
  }

}
