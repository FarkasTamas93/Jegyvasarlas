import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from './../events.service';
import { DatabaseService } from './../database.service';
import { EventModel } from './../events/event.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.css']
})
export class EditeventComponent implements OnInit {

  selectedEvent:EventModel;

  constructor(private databaseService:DatabaseService,
              private eventsService:EventsService,
              private route: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.selectedEvent = this.eventsService.getEvent(this.route.snapshot.params.id);
    console.log(this.selectedEvent);
  }

  requiredRow=0;
  
  rowNeeded=false;

  @ViewChild('f') addEventForm: NgForm;


  onSubmit() {
    this.databaseService.storeEvents(this.eventsService.getEvents()).subscribe((response) => console.log(response),(error) =>console.log(error));
  }

  onPlusRow(num:number) {
    this.requiredRow=num;
    this.rowNeeded=true;
  }

}
