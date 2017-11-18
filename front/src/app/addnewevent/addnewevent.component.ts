import { EventsService } from './../events.service';
import { DatabaseService } from './../database.service';
import { EventModel } from './../events/event.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addnewevent',
  templateUrl: './addnewevent.component.html',
  styleUrls: ['./addnewevent.component.css']
})
export class AddneweventComponent implements OnInit {

  @ViewChild('f') addEventForm: NgForm;
  requiredRow=0;

  rowNeeded=false;

  defaultEventType = "theatre";
  defaultTown = "Budapest";

  newEvent = {
    imagePath : '',
    title: '',   
    description: '',
    town: '',
    address:'',
    time: '',
    eventType: '',
    ticketType: '',
    ticketPrice: 0,
    eventIndex: 0
  }

  constructor(private databaseService:DatabaseService,
              private eventsService:EventsService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.addEventForm);
    this.newEvent.imagePath= this.addEventForm.value.picture;
    this.newEvent.title= this.addEventForm.value.eventInfo.eventTitle;
    this.newEvent.description= this.addEventForm.value.eventInfo.description;
    this.newEvent.town= this.addEventForm.value.eventLocation.town;
    this.newEvent.address= this.addEventForm.value.eventLocation.eventAdress;
    this.newEvent.time= this.addEventForm.value.eventLocation.eventTime;
    this.newEvent.eventType= this.addEventForm.value.eventInfo.eventType;
    this.newEvent.ticketType= this.addEventForm.value.ticketInfo.ticketType;
    this.newEvent.ticketPrice= this.addEventForm.value.ticketInfo.ticketPrice;
    this.newEvent.eventIndex = this.eventsService.getEvents().length;

    this.eventsService.getEvents().push(this.newEvent);
    console.log(this.newEvent);

    //Belefűzi az utolsó helyre az eventet
    this.databaseService.storeEvents(this.eventsService.getEvents()).subscribe((response) => console.log(response),(error) =>console.log(error));
  }

  onPlusRow(num:number) {
    this.requiredRow=num;
    this.rowNeeded=true;
  }

}
