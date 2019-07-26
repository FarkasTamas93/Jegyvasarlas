import { Router } from '@angular/router';
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
  @ViewChild('teszt') inputTeszt;
  requiredRow=1;

  rowNeeded=false;

  szinhaz:boolean=false;
  kiallitas:boolean=false;
  koncert:boolean=false;
  mozi:boolean=false;
  cirkusz:boolean=false;
  
  //defaultEventType = "theatre";
  defaultEventType = "";
  eventGenre = "";
  //defaultTown = "Budapest";
  defaultTown = "";

  newEvent = {
    imagePath : '',
    title: '',   
    description: '',
    town: '',
    address:'',
    time: '',
    eventType: '',
    eventGenre: '',
    ticketType: [],
    ticketPrice: [],
    eventIndex: 0
  }

  constructor(private databaseService:DatabaseService,
              private eventsService:EventsService,
              private router:Router) { }

  ngOnInit() {
  }

  onChange(data){
    this.szinhaz=false;
    this.kiallitas=false;
    this.koncert=false;
    this.mozi=false;
    this.cirkusz=false;
    if(data === "Színház") {
      this.szinhaz=true;
      this.eventGenre="";
    }else if( data === "Koncert") {
      this.koncert=true;
      this.eventGenre="";
    }else if( data === "Kiállítás") {
      this.kiallitas=true;
      this.eventGenre="";
    }else if( data === "Mozi") {
      this.mozi=true;
      this.eventGenre="";
    }else if( data === "Cirkusz") {
      this.cirkusz=true;
      this.eventGenre="";
    }
  }

  onSubmit() {
 //   console.log(this.addEventForm);
    this.newEvent.imagePath= this.addEventForm.value.picture;
    this.newEvent.title= this.addEventForm.value.eventInfo.eventTitle;
    this.newEvent.description= this.addEventForm.value.eventInfo.description;
    this.newEvent.town= this.addEventForm.value.eventLocation.town;
    this.newEvent.address= this.addEventForm.value.eventLocation.eventAdress;
    this.newEvent.time= this.addEventForm.value.eventLocation.eventTime;
    this.newEvent.eventType= this.addEventForm.value.eventInfo.eventType;
    this.newEvent.eventGenre=this.addEventForm.value.eventInfo.eventGenre
//    this.newEvent.ticketType= this.addEventForm.value.ticketInfo.ticketType;
 //   this.newEvent.ticketPrice= this.addEventForm.value.ticketInfo.ticketPrice;
    this.setAllTicket();
    this.newEvent.eventIndex = this.eventsService.getEvents().length;

    this.eventsService.getEvents().push(this.newEvent);
    console.log(this.newEvent);

    //Belefűzi az utolsó helyre az eventet
//    this.databaseService.storeEvents(this.eventsService.getEvents()).subscribe((response) => console.log(response),(error) =>console.log(error));
    
    this.addEventForm.reset();
  }

  setAllTicket() {
    this.newEvent.ticketType=[];
    this.newEvent.ticketPrice=[];
    if(this.requiredRow === 1) {
      this.newEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType);

      this.newEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice);
    }
    if(this.requiredRow === 2) {
      this.newEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType);
      this.newEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType2);

      this.newEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice);
      this.newEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice2);
    }
    if(this.requiredRow === 3) {
      this.newEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType);
      this.newEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType2);
      this.newEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType3);

      this.newEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice);
      this.newEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice2);
      this.newEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice3);
    }
    if(this.requiredRow === 4) {
      this.newEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType);
      this.newEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType2);
      this.newEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType3);
      this.newEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType4);

      this.newEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice);
      this.newEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice2);
      this.newEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice3);
      this.newEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice4);
    }
    if(this.requiredRow === 5) {
      this.newEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType);
      this.newEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType2);
      this.newEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType3);
      this.newEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType4);
      this.newEvent.ticketType.push(this.addEventForm.value.ticketInfo.ticketType5);

      this.newEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice);
      this.newEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice2);
      this.newEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice3);
      this.newEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice4);
      this.newEvent.ticketPrice.push(this.addEventForm.value.ticketInfo.ticketPrice5);

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
