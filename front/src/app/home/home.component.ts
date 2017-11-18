import { EventsService } from './../events.service';
import { EventModel } from './../events/event.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //events: EventModel[];
  num=12;
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
//    this.events = this.eventsService.getEvents();
  }

  setNum() {
    this.num=this.num+2;
  }
}
