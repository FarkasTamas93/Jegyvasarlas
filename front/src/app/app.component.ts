import { EventsService } from './events.service';
import { DatabaseService } from './database.service';
import { EventModel } from './events/event.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private databaseService: DatabaseService,
    private eventsService: EventsService) {

    this.databaseService.getEvents().subscribe(
      (events: any[]) => this.eventsService.getEvents().push(...events),
      (error) => console.log(error)
    )
    
  }
  
  onLoad() {
    this.databaseService.getEvents().subscribe(
      (events: any[]) => console.log(events),
      (error) => console.log(error)
    )
  }

}

