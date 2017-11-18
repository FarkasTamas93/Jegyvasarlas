import { EventsService } from './../events.service';
import { EventModel } from './../events/event.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-eventinformation',
  templateUrl: './eventinformation.component.html',
  styleUrls: ['./eventinformation.component.css']
})
export class EventinformationComponent implements OnInit {
  
  selectedItem: EventModel;

  selected:number;

  teszt:EventModel;

  constructor(private eventsService:EventsService ,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let num=this.eventsService.getSelectedItemIndex();
    this.selectedItem=this.eventsService.getEvents()[num];
  }
}
