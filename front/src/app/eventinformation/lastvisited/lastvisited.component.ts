import { Router } from '@angular/router';
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

  constructor(private eventsService:EventsService,
              private router:Router) { }

  ngOnInit() {
    let index = this.eventsService.getlastThreeSelectedItem();
    this.selectedItems.push(this.eventsService.getEvents()[index[0]]);
    this.selectedItems.push(this.eventsService.getEvents()[index[1]]);
    this.selectedItems.push(this.eventsService.getEvents()[index[2]]);
  }

  clickedLastEvent(index:number){
    this.router.navigate(['/eventinformation/',index]);   
  }

}
