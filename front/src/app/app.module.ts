import { EventticketService } from './eventticket.service';
import { UsersService } from './users.service';
import { HttpModule } from '@angular/http';
import { DatabaseService } from './database.service';
import { FormsModule } from '@angular/forms';
import { EventsService } from './events.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { EventItemComponent } from './events/event-item/event-item.component';
import { HomeComponent } from './home/home.component';
import { EventinformationComponent } from './eventinformation/eventinformation.component';
import { SearchComponent } from './home/search/search.component';
import { DescriptionComponent } from './eventinformation/description/description.component';
import { LastvisitedComponent } from './eventinformation/lastvisited/lastvisited.component';
import { NavtoolbarComponent } from './eventinformation/navtoolbar/navtoolbar.component';
import { TickettypesComponent } from './eventinformation/tickettypes/tickettypes.component';
import { AddneweventComponent } from './addnewevent/addnewevent.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { SelectedTypedEventComponent } from './selected-typed-event/selected-typed-event.component';
import { BuyeventticketComponent } from './buyeventticket/buyeventticket.component';
import { HighlightDirective } from './highlight.directive';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'eventinformation',component: EventinformationComponent },
  {path: 'eventinformation/:id',component: EventinformationComponent }, 
  {path: 'addnewevent',component: AddneweventComponent },
  {path: 'addnewuser',component: UserregistrationComponent },
  {path: 'typedEvent/:type', component:SelectedTypedEventComponent},
  {path: 'buyTicket', component:BuyeventticketComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    EventItemComponent,
    HomeComponent,
    EventinformationComponent,
    SearchComponent,
    DescriptionComponent,
    LastvisitedComponent,
    NavtoolbarComponent,
    TickettypesComponent,
    AddneweventComponent,
    UserregistrationComponent,
    SelectedTypedEventComponent,
    BuyeventticketComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventsService,DatabaseService,UsersService,EventticketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
