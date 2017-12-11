import { EventticketService } from './../eventticket.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  eventTicketPrice:number;

  constructor(private router:Router,
              private eventTicketService:EventticketService) { }

  ngOnInit() {
    this.eventTicketPrice = this.eventTicketService.getReservedTicketPrice();
  }

  backToHome(){
    this.router.navigate(['/home']);
  }
}
