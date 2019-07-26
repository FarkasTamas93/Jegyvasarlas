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
    this.requiredRow = this.selectedEvent.ticketPrice.length;
    console.log(this.selectedEvent);
  }

  requiredRow:number;
  
  rowNeeded=true;

  @ViewChild('f') addEventForm: NgForm;


  onSubmit() {
    this.setAllTicket();
//    this.databaseService.storeEvents(this.eventsService.getEvents()).subscribe((response) => console.log(response),(error) =>console.log(error));
    this.router.navigate(['/eventinformation',this.selectedEvent.eventIndex]);
  }

  setAllTicket() {
    this.selectedEvent.ticketType=[];
    this.selectedEvent.ticketPrice=[];
    if(this.requiredRow === 1) {
      this.selectedEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType);

      this.selectedEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice);
    }
    if(this.requiredRow === 2) {
      this.selectedEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType);
      this.selectedEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType2);

      this.selectedEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice);
      this.selectedEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice2);
    }
    if(this.requiredRow === 3) {
      this.selectedEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType);
      this.selectedEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType2);
      this.selectedEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType3);

      this.selectedEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice);
      this.selectedEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice2);
      this.selectedEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice3);
    }
    if(this.requiredRow === 4) {
      this.selectedEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType);
      this.selectedEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType2);
      this.selectedEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType3);
      this.selectedEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType4);

      this.selectedEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice);
      this.selectedEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice2);
      this.selectedEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice3);
      this.selectedEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice4);
    }
    if(this.requiredRow === 5) {
      this.selectedEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType);
      this.selectedEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType2);
      this.selectedEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType3);
      this.selectedEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType4);
      this.selectedEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType5);

      this.selectedEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice);
      this.selectedEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice2);
      this.selectedEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice3);
      this.selectedEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice4);
      this.selectedEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice5);

    }

  }

  onPlusRow(num:number) {
    this.requiredRow=num;
    this.rowNeeded=true;
  }

  clickMegsem() {
    this.router.navigate(['/home']);
  }

}
