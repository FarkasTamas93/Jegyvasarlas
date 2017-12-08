import { EventModel } from './../../events/event.model';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from './../../database.service';
import { EventsService } from './../../events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exhibitionticketbuy',
  templateUrl: './exhibitionticketbuy.component.html',
  styleUrls: ['./exhibitionticketbuy.component.css']
})
export class ExhibitionticketbuyComponent implements OnInit {

  selectedEvent:EventModel;
  selectedEventTypeNumber:number;

  constructor(private eventService:EventsService,
              private databaseService:DatabaseService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    let eventIndex=this.route.snapshot.params['id'];
    this.selectedEvent = this.eventService.getEvents()[eventIndex];
    this.selectedEventTypeNumber=this.selectedEvent.ticketType.length;

  }

}
