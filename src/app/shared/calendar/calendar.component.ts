import { Component, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    FullCalendarModule,
],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  
})
export class CalendarComponent implements OnInit {

 public events: any[];
 public options:any;

  constructor() { }

  ngOnInit() {

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      locale: esLocale,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      views: {
        dayGridMonth: {
          dayMaxEventRows: true
        },
        timeGridWeek: {
          slotMinTime: '06:00:00',
          slotMaxTime: '22:00:00'
        },
        timeGridDay: {
          slotMinTime: '06:00:00',
          slotMaxTime: '22:00:00'
        }
      },
      editable: false
    };
    

    this.events=[
      {
        title: "Evento 1",
        start:new Date(),
        description: "Evento 1"
      },
      {
        title: "Evento 2",
        start:new Date(new Date().getTime() + 86400000),
        description: "Evento 2"
      },
      {
        title: "Evento 3",
        start:new Date(new Date().getTime() + (86400000*2)),
        end:new Date(new Date().getTime() + (86400000*3)),
        description: "Evento 3"
      },
    ]
  }

}
