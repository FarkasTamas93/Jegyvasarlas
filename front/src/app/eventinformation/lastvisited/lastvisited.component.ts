import { EventModel } from './../../events/event.model';
import { EventsService } from './../../events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lastvisited',
  templateUrl: './lastvisited.component.html',
  styleUrls: ['./lastvisited.component.css']
})
export class LastvisitedComponent implements OnInit {
  selectedItems: EventModel[] = [];

  constructor(private eventsService:EventsService) { }

  ngOnInit() {
    let index = this.eventsService.getlastThreeSelectedItem();
    this.selectedItems.push(this.eventsService.getEvents()[index[0]]);
    this.selectedItems.push(this.eventsService.getEvents()[index[1]]);
    this.selectedItems.push(this.eventsService.getEvents()[index[2]]);
  }

}
