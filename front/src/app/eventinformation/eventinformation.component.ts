import { LoggeduserService } from './../loggeduser.service';
import { EventsService } from './../events.service';
import { EventModel } from './../events/event.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-eventinformation',
  templateUrl: './eventinformation.component.html',
  styleUrls: ['./eventinformation.component.css']
})
export class EventinformationComponent implements OnInit {
  
  selectedItem: EventModel;

  selected:number;

  teszt:EventModel;

  user;

  constructor(private eventsService:EventsService ,
              private route: ActivatedRoute,
              private router:Router,
              private loggedUser:LoggeduserService) {
  }

  ngOnInit() {
    let num=this.eventsService.getSelectedItemIndex();
    this.selectedItem=this.eventsService.getEvents()[num];
    this.route.params.subscribe((params:Params) => {
      this.selectedItem=this.eventsService.getEvents()[params['id']];
    })
    this.user = this.loggedUser.loggeduser;
  }

  modifyActualEvent() {
    let index=(this.route.snapshot.params.id);
    this.router.navigate(['/editevent',index]);
  }

}
