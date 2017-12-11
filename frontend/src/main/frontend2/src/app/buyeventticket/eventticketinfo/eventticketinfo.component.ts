import { EventTicketModel } from './../eventticket.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eventticketinfo',
  templateUrl: './eventticketinfo.component.html',
  styleUrls: ['./eventticketinfo.component.css']
})
export class EventticketinfoComponent implements OnInit {
  @Input() eventTicket:EventTicketModel;

  constructor() { }

  ngOnInit() {
  }

}
