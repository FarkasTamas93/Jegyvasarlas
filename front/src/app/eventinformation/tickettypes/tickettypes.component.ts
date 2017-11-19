import { Router } from '@angular/router';
import { EventsService } from './../../events.service';
import { EventModel } from './../../events/event.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickettypes',
  templateUrl: './tickettypes.component.html',
  styleUrls: ['./tickettypes.component.css']
})
export class TickettypesComponent implements OnInit {

  selectedItem:EventModel;
  
    constructor(private eventsService:EventsService,
                private router: Router) { }
  
    ngOnInit() {
      this.selectedItem=this.eventsService.getEvent(this.eventsService.getSelectedItemIndex());
    }

    changePath(){
      this.router.navigate(['/buyTicket']);
    }
}
