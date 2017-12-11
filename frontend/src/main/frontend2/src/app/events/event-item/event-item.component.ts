import { EventsService } from './../../events.service';
import { EventModel } from './../event.model';
import { Component, OnInit,Input } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() eventItem: EventModel;
  @Input() index: number;

  constructor(private eventsService:EventsService ,
              private router: Router) { }

  ngOnInit() {
  }

  
}
