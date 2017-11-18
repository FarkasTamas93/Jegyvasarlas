import { EventModel } from './../../events/event.model';
import { EventsService } from './../../events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  
  selectedItem:EventModel;

  constructor(private eventsService:EventsService) { }

  ngOnInit() {
    this.selectedItem=this.eventsService.getEvent(this.eventsService.getSelectedItemIndex());
  }

}
