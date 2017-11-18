import { ActivatedRoute, Params } from '@angular/router';
import { EventModel } from './../events/event.model';
import { EventsService } from './../events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-typed-event',
  templateUrl: './selected-typed-event.component.html',
  styleUrls: ['./selected-typed-event.component.css']
})
export class SelectedTypedEventComponent implements OnInit {
  selectedEvents: EventModel[] = [];
  type:string;

  constructor(private eventsService:EventsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedEvents=this.eventsService.getActualList();
    this.route.params.subscribe(params => {
      this.type = params['type']; // (+) converts string 'id' to a number
      console.log(this.type);
      this.eventsService.getEventsFromType(this.type);
      this.selectedEvents=this.eventsService.getActualList();
      console.log(this.selectedEvents);
   });
 }
    
  }

