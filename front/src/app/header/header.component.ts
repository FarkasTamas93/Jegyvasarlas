import { EventsService } from './../events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginLink=false;
  logged=false;

  constructor(private eventsService:EventsService) { }

  ngOnInit() {
  }

  onLoginClick() {
    this.loginLink=!this.loginLink;
  }

  onLoggedButtonClicked() {
    this.logged=!this.logged;
    this.loginLink=!this.loginLink;
  }

  typedList(type:string){
    this.eventsService.setEventsFromType(type);
    console.log(this.eventsService.getActualList());
  }

}
