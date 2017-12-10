import { EventsService } from './events.service';
import { EventModel } from './events/event.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx'

@Injectable()
export class DatabaseService {

  constructor(private http:Http,private eventsService:EventsService) { }

  storeEvents(events: any[]) {
    return this.http.put('https://jegyvasarlas-http.firebaseio.com/events.json', events);
  }

  getEvents() {
    return this.http.get('https://jegyvasarlas-http.firebaseio.com/events.json')
      .map(
         (response: Response) => {
           const data = response.json();
            return data;
          }
        );
  }

  storeUsers(users: any[]) {
    return this.http.post('https://jegyvasarlas-http.firebaseio.com/users.json', users);
  }

  getUsers() {
    return this.http.get('https://jegyvasarlas-http.firebaseio.com/users.json')
      .map(
         (response: Response) => {
           const data = response.json();
            return data;
          }
        );
  }

  storeTickets(tickets: any[]) {
    return this.http.put('https://jegyvasarlas-http.firebaseio.com/tickets.json', tickets);
  }

  getTickets() {
    return this.http.get('https://jegyvasarlas-http.firebaseio.com/tickets.json')
      .map(
         (response: Response) => {
           const data = response.json();
           return data;
          }
        );
  }

}
