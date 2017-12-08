import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from './../events.service';
import { EventModel } from './../events/event.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  legujabbIsClicked=false;
  start=true;
  last12Event:EventModel[];

  //events: EventModel[];
  num=12;    //alapból mennyi kép jelenjen meg
  constructor(private eventsService: EventsService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
//    this.events = this.eventsService.getEvents();
  }

  navigateSearch() {
    this.router.navigate(['/search']);
  }

  clickLegujabb(){
    this.legujabbIsClicked=true;
    this.start=false;
    this.eventsService.setLast12Event();
    this.last12Event=this.eventsService.getLast12Event();
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
