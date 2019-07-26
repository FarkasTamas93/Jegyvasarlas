import { DatabaseService } from './../database.service';
import { EventsService } from './../events.service';
import { EventModel } from './event.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: EventModel[];

  @Input() numOfEvents:number;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }

  onSelectedItem(index:number) {
    this.eventsService.setSelectedItemIndex(index);
    console.log(index);
  }

  onThreeSelectedItem(index:number) {
    this.eventsService.setlastThreeSelectedItem(index);
    console.log(this.eventsService.getlastThreeSelectedItem());
  }

}
