import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx'

@Injectable()
export class DatabaseService {

  constructor(private http:Http) { }

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
    return this.http.put('https://jegyvasarlas-http.firebaseio.com/users.json', users);
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

}
