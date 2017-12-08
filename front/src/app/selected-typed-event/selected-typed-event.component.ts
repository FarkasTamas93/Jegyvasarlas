import { ActivatedRoute, Params } from '@angular/router';
import { EventModel } from './../events/event.model';
import { EventsService } from './../events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-typed-event',
  templateUrl: './selected-typed-event.component.html',
  styleUrls: ['./selected-typed-event.component.css']
})
export class SelectedTypedEventComponent implements OnInit {
  selectedEvents: EventModel[] = [];
  type:string;
  num=12;    //alapból mennyi kép jelenjen meg

  constructor(private eventsService:EventsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedEvents=this.eventsService.getActualList();
    console.log("Ezerdekelmostitten")
    console.log(this.selectedEvents);
    this.route.params.subscribe(params => {
      this.type = params['type']; // (+) converts string 'id' to a number
      console.log(this.type);
      this.eventsService.setEventsFromType(this.type);
      this.selectedEvents=this.eventsService.getActualList();
      console.log(this.selectedEvents);
   });
 }
    

     onSelectedItem(index:number) {
      this.eventsService.setSelectedItemIndex(index);
      console.log(index);
    }
    
    onThreeSelectedItem(index:number) {
      this.eventsService.setlastThreeSelectedItem(index);
      console.log(this.eventsService.getlastThreeSelectedItem());
    }

    setNum() {
      this.num=this.num+2;        //+ba megjelenített képek száma
    }
    
  }

