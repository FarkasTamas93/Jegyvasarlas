import { LoggeduserService } from './../../loggeduser.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from './../../events.service';
import { EventModel } from './../../events/event.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tickettypes',
  templateUrl: './tickettypes.component.html',
  styleUrls: ['./tickettypes.component.css']
})
export class TickettypesComponent implements OnInit {

@Input() selectedItem:EventModel;
@Input() selectedItemType:string;

user;

@Input() ticketsNumber:number;
    constructor(private eventsService:EventsService,
                private router: Router,
                private route: ActivatedRoute,
                private loggedUser:LoggeduserService) { }
  
    ngOnInit() {
//      this.selectedItem=this.eventsService.getEvent(this.eventsService.getSelectedItemIndex());
      this.ticketsNumber = this.selectedItem.ticketType.length;
      this.user = this.loggedUser.loggeduser;
    }

    changePath(){
      this.router.navigate(['/buyTicket',this.route.snapshot.params.id]);
    }

    changeExhibitonBuyTicket(){
      this.router.navigate(['/buyExhibitionTicket',this.route.snapshot.params.id]);
    }
}
