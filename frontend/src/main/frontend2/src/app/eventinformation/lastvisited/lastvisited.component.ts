import { Router } from '@angular/router';
import { EventModel } from './../../events/event.model';
import { EventsService } from './../../events.service';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-lastvisited',
  templateUrl: './lastvisited.component.html',
  styleUrls: ['./lastvisited.component.css']
})
export class LastvisitedComponent implements OnInit {
  selectedItems: EventModel[] = [];

  getData:boolean=false;

  constructor(private eventsService:EventsService,
              private router:Router) { }

  ngOnInit() {
    if(this.eventsService.getEvents().length == 0) {
      setTimeout(() => {
        let index = this.eventsService.getlastThreeSelectedItem();
        this.selectedItems.push(this.eventsService.getEvents()[index[0]]);
        this.selectedItems.push(this.eventsService.getEvents()[index[1]]);
        this.selectedItems.push(this.eventsService.getEvents()[index[2]]);
        this.getData=true;
      }, 300)
    }
    
    if(this.eventsService.getEvents().length > 0){
     let index = this.eventsService.getlastThreeSelectedItem();
     this.selectedItems.push(this.eventsService.getEvents()[index[0]]);
     this.selectedItems.push(this.eventsService.getEvents()[index[1]]);
     this.selectedItems.push(this.eventsService.getEvents()[index[2]]);
     this.getData=true;
    }
  }

  clickedLastEvent(index:number){
    this.router.navigate(['/eventinformation/',index]);   
  }

}
