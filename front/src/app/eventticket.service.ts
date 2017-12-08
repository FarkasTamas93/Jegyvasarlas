import { Injectable } from '@angular/core';
import { EventTicketModel } from './buyeventticket/eventticket.model';

@Injectable()
export class EventticketService {
  allEventTicketTest : EventTicketModel[] =[];

  allEventTicket : EventTicketModel[] = [
    // new EventTicketModel(1,1,"valami",false,5200),
    // new EventTicketModel(2,1,"valami",false,5200),
    // new EventTicketModel(3,1,"valami",false,5200),
    // new EventTicketModel(4,1,"valami",false,5200),
    // new EventTicketModel(5,1,"valami",false,5200),
    // new EventTicketModel(6,1,"valami",false,5200),
    // new EventTicketModel(7,1,"valami",false,5200),
    // new EventTicketModel(8,1,"valami",false,5200),
    // new EventTicketModel(9,1,"valami",false,5200),
    // new EventTicketModel(10,1,"valami",false,5200),
    // new EventTicketModel(11,1,"valami",false,5200),
    // new EventTicketModel(12,1,"valami",false,5200),
    // new EventTicketModel(13,1,"valami",false,5200),
    // new EventTicketModel(14,1,"valami",false,5200),
    // new EventTicketModel(15,1,"valami",false,5200),
    // new EventTicketModel(16,1,"valami",false,5200),
    // new EventTicketModel(1,2,"valami",false,4200),
    // new EventTicketModel(2,2,"valami",false,4200),
    // new EventTicketModel(3,2,"valami",false,4200),
    // new EventTicketModel(4,2,"valami",false,4200),
    // new EventTicketModel(5,2,"valami",false,4200),
    // new EventTicketModel(6,2,"valami",false,4200),
    // new EventTicketModel(7,2,"valami",false,4200),
    // new EventTicketModel(8,2,"valami",false,4200),
    // new EventTicketModel(9,2,"valami",false,4200),
    // new EventTicketModel(10,2,"valami",false,4200),
    // new EventTicketModel(11,2,"valami",false,4200),
    // new EventTicketModel(12,2,"valami",false,4200),
    // new EventTicketModel(13,2,"valami",false,4200),
    // new EventTicketModel(14,2,"valami",false,4200),
    // new EventTicketModel(15,2,"valami",false,4200),
    // new EventTicketModel(16,2,"valami",false,4200),
    // new EventTicketModel(17,2,"valami",false,4200),
    // new EventTicketModel(1,3,"valami",false,3200),
    // new EventTicketModel(2,3,"valami",false,3200),
    // new EventTicketModel(3,3,"valami",false,3200),
    // new EventTicketModel(4,3,"valami",false,3200),
    // new EventTicketModel(5,3,"valami",false,3200),
    // new EventTicketModel(6,3,"valami",false,3200),
    // new EventTicketModel(7,3,"valami",false,3200),
    // new EventTicketModel(8,3,"valami",false,3200),
    // new EventTicketModel(9,3,"valami",false,3200),
    // new EventTicketModel(10,3,"valami",false,3200),
    // new EventTicketModel(11,3,"valami",false,3200),
    // new EventTicketModel(12,3,"valami",false,3200),
    // new EventTicketModel(13,3,"valami",false,3200),
    // new EventTicketModel(14,3,"valami",false,3200),
    // new EventTicketModel(15,3,"valami",false,3200),
    // new EventTicketModel(16,3,"valami",false,3200),
    // new EventTicketModel(1,4,"valami",false,2200),
    // new EventTicketModel(2,4,"valami",false,2200),
    // new EventTicketModel(3,4,"valami",false,2200),
    // new EventTicketModel(4,4,"valami",false,2200),
    // new EventTicketModel(5,4,"valami",false,2200),
    // new EventTicketModel(6,4,"valami",false,2200),
    // new EventTicketModel(7,4,"valami",false,2200),
    // new EventTicketModel(8,4,"valami",false,2200),
    // new EventTicketModel(9,4,"valami",false,2200),
    // new EventTicketModel(10,4,"valami",false,2200),
    // new EventTicketModel(11,4,"valami",false,2200),
    // new EventTicketModel(12,4,"valami",false,2200),
    // new EventTicketModel(13,4,"valami",false,2200),
    // new EventTicketModel(14,4,"valami",false,2200),
    // new EventTicketModel(15,4,"valami",false,2200),
    // new EventTicketModel(1,5,"valami",false,2200),
    // new EventTicketModel(2,5,"valami",false,2200),
    // new EventTicketModel(3,5,"valami",false,2200),
    // new EventTicketModel(4,5,"valami",false,2200),
    // new EventTicketModel(5,5,"valami",false,2200),
    // new EventTicketModel(6,5,"valami",false,2200),
    // new EventTicketModel(7,5,"valami",false,2200),
    // new EventTicketModel(8,5,"valami",false,2200),
    // new EventTicketModel(9,5,"valami",false,2200),
    // new EventTicketModel(10,5,"valami",false,2200),
    // new EventTicketModel(11,5,"valami",false,2200),
    // new EventTicketModel(12,5,"valami",false,2200),
    // new EventTicketModel(13,5,"valami",false,2200),
    // new EventTicketModel(14,5,"valami",false,2200),
    // new EventTicketModel(15,5,"valami",false,2200),
    // new EventTicketModel(16,5,"valami",false,2200),
    // new EventTicketModel(1,6,"valami",false,2200),
    // new EventTicketModel(2,6,"valami",false,2200),
    // new EventTicketModel(3,6,"valami",false,2200),
    // new EventTicketModel(4,6,"valami",false,2200),
    // new EventTicketModel(5,6,"valami",false,2200),
    // new EventTicketModel(6,6,"valami",false,2200),
    // new EventTicketModel(7,6,"valami",false,2200),
    // new EventTicketModel(8,6,"valami",false,2200),
    // new EventTicketModel(9,6,"valami",false,2200),
    // new EventTicketModel(10,6,"valami",false,2200),
    // new EventTicketModel(11,6,"valami",false,2200),
    // new EventTicketModel(12,6,"valami",false,2200),
    // new EventTicketModel(13,6,"valami",false,2200),
    // new EventTicketModel(14,6,"valami",false,2200),
    // new EventTicketModel(15,6,"valami",false,2200),
    // new EventTicketModel(1,7,"valami",false,2200),
    // new EventTicketModel(2,7,"valami",false,2200),
    // new EventTicketModel(3,7,"valami",false,2200),
    // new EventTicketModel(4,7,"valami",false,2200),
    // new EventTicketModel(5,7,"valami",false,2200),
    // new EventTicketModel(6,7,"valami",false,2200),
    // new EventTicketModel(7,7,"valami",false,2200),
    // new EventTicketModel(8,7,"valami",false,2200),
    // new EventTicketModel(9,7,"valami",false,2200),
    // new EventTicketModel(10,7,"valami",false,2200),
    // new EventTicketModel(11,7,"valami",false,2200),
    // new EventTicketModel(12,7,"valami",false,2200),
    // new EventTicketModel(13,7,"valami",false,2200),
    // new EventTicketModel(14,7,"valami",false,2200),
    // new EventTicketModel(15,7,"valami",false,2200),
    // new EventTicketModel(16,7,"valami",false,2200),
    // new EventTicketModel(1,8,"valami",false,2200),
    // new EventTicketModel(2,8,"valami",false,2200),
    // new EventTicketModel(3,8,"valami",false,2200),
    // new EventTicketModel(4,8,"valami",false,2200),
    // new EventTicketModel(5,8,"valami",false,2200),
    // new EventTicketModel(6,8,"valami",false,2200),
    // new EventTicketModel(7,8,"valami",false,2200),
    // new EventTicketModel(8,8,"valami",false,2200),
    // new EventTicketModel(9,8,"valami",false,2200),
    // new EventTicketModel(10,8,"valami",false,2200),
    // new EventTicketModel(11,8,"valami",false,2200),
    // new EventTicketModel(12,8,"valami",false,2200),
    // new EventTicketModel(13,8,"valami",false,2200),
    // new EventTicketModel(14,8,"valami",false,2200),
    // new EventTicketModel(15,8,"valami",false,2200),
    // new EventTicketModel(1,9,"valami",false,2200),
    // new EventTicketModel(2,9,"valami",false,2200),
    // new EventTicketModel(3,9,"valami",false,2200),
    // new EventTicketModel(4,9,"valami",false,2200),
    // new EventTicketModel(5,9,"valami",false,2200),
    // new EventTicketModel(6,9,"valami",false,2200),
    // new EventTicketModel(7,9,"valami",false,2200),
    // new EventTicketModel(8,9,"valami",false,2200),
    // new EventTicketModel(9,9,"valami",false,2200),
    // new EventTicketModel(10,9,"valami",false,2200),
    // new EventTicketModel(11,9,"valami",false,2200),
    // new EventTicketModel(12,9,"valami",false,2200),
    // new EventTicketModel(13,9,"valami",false,2200),
    // new EventTicketModel(14,9,"valami",false,2200),
    // new EventTicketModel(15,9,"valami",false,2200),
    // new EventTicketModel(16,9,"valami",false,2200),
    // new EventTicketModel(1,10,"valami",false,2200),
    // new EventTicketModel(2,10,"valami",false,2200),
    // new EventTicketModel(3,10,"valami",false,2200),
    // new EventTicketModel(4,10,"valami",false,2200),
    // new EventTicketModel(5,10,"valami",false,2200),
    // new EventTicketModel(6,10,"valami",false,2200),
    // new EventTicketModel(7,10,"valami",false,2200),
    // new EventTicketModel(8,10,"valami",false,2200),
    // new EventTicketModel(9,10,"valami",false,2200),
    // new EventTicketModel(10,10,"valami",false,2200),
    // new EventTicketModel(11,10,"valami",false,2200),
    // new EventTicketModel(12,10,"valami",false,2200),
    // new EventTicketModel(13,10,"valami",false,2200),
    // new EventTicketModel(14,10,"valami",false,2200),
    // new EventTicketModel(15,10,"valami",false,2200),
    // new EventTicketModel(16,10,"valami",false,2200),
    // new EventTicketModel(16,10,"valami",false,2200),
    // new EventTicketModel(1,11,"valami",false,2200),
    // new EventTicketModel(2,11,"valami",false,2200),
    // new EventTicketModel(3,11,"valami",false,2200),
    // new EventTicketModel(4,11,"valami",false,2200),
    // new EventTicketModel(5,11,"valami",false,2200),
    // new EventTicketModel(6,11,"valami",false,2200),
    // new EventTicketModel(7,11,"valami",false,2200),
    // new EventTicketModel(8,11,"valami",false,2200),
    // new EventTicketModel(9,11,"valami",false,2200),
    // new EventTicketModel(10,11,"valami",false,2200),
    // new EventTicketModel(11,11,"valami",false,2200),
    // new EventTicketModel(12,11,"valami",false,2200),
    // new EventTicketModel(13,11,"valami",false,2200),
    // new EventTicketModel(14,11,"valami",false,2200),
    // new EventTicketModel(15,11,"valami",false,2200),
    // new EventTicketModel(16,11,"valami",false,2200),
    // new EventTicketModel(1,12,"valami",false,2200),
    // new EventTicketModel(2,12,"valami",false,2200),
    // new EventTicketModel(3,12,"valami",false,2200),
    // new EventTicketModel(4,12,"valami",false,2200),
    // new EventTicketModel(5,12,"valami",false,2200),
    // new EventTicketModel(6,12,"valami",false,2200),
    // new EventTicketModel(7,12,"valami",false,2200),
    // new EventTicketModel(8,12,"valami",false,2200),
    // new EventTicketModel(9,12,"valami",false,2200),
    // new EventTicketModel(10,12,"valami",false,2200),
    // new EventTicketModel(11,12,"valami",false,2200),
    // new EventTicketModel(12,12,"valami",false,2200),
    // new EventTicketModel(13,12,"valami",false,2200),
    // new EventTicketModel(14,12,"valami",false,2200),
    // new EventTicketModel(15,12,"valami",false,2200),
    // new EventTicketModel(1,13,"valami",false,2200),
    // new EventTicketModel(2,13,"valami",false,2200),
    // new EventTicketModel(3,13,"valami",false,2200),
    // new EventTicketModel(4,13,"valami",false,2200),
    // new EventTicketModel(5,13,"valami",false,2200),
    // new EventTicketModel(6,13,"valami",false,2200),
    // new EventTicketModel(7,13,"valami",false,2200),
    // new EventTicketModel(8,13,"valami",false,2200),
    // new EventTicketModel(9,13,"valami",false,2200),
    // new EventTicketModel(10,13,"valami",false,2200),
    // new EventTicketModel(11,13,"valami",false,2200),
    // new EventTicketModel(12,13,"valami",false,2200),
    // new EventTicketModel(13,13,"valami",false,2200),
    // new EventTicketModel(14,13,"valami",false,2200),
    // new EventTicketModel(15,13,"valami",false,2200),
    // new EventTicketModel(16,13,"valami",false,2200),
    // new EventTicketModel(1,14,"valami",false,2200),
    // new EventTicketModel(2,14,"valami",false,2200),
    // new EventTicketModel(3,14,"valami",false,2200),
    // new EventTicketModel(4,14,"valami",false,2200),
    // new EventTicketModel(5,14,"valami",false,2200),
    // new EventTicketModel(6,14,"valami",false,2200),
    // new EventTicketModel(7,14,"valami",false,2200),
    // new EventTicketModel(8,14,"valami",false,2200),
    // new EventTicketModel(9,14,"valami",false,2200),
    // new EventTicketModel(10,14,"valami",false,2200),
    // new EventTicketModel(11,14,"valami",false,2200),
    // new EventTicketModel(12,14,"valami",false,2200),
    // new EventTicketModel(13,14,"valami",false,2200),
    // new EventTicketModel(14,14,"valami",false,2200),
    // new EventTicketModel(15,14,"valami",false,2200),
    // new EventTicketModel(16,14,"valami",false,2200),
    // new EventTicketModel(17,14,"valami",false,2200)
  ]
  eventTicketsRow1:EventTicketModel[]=[
    // new EventTicketModel(1,1,"valami",false,5200),
    // new EventTicketModel(2,1,"valami",false,5200),
    // new EventTicketModel(3,1,"valami",false,5200),
    // new EventTicketModel(4,1,"valami",false,5200),
    // new EventTicketModel(5,1,"valami",false,5200),
    // new EventTicketModel(6,1,"valami",false,5200),
    // new EventTicketModel(7,1,"valami",false,5200),
    // new EventTicketModel(8,1,"valami",false,5200),
    // new EventTicketModel(9,1,"valami",false,5200),
    // new EventTicketModel(10,1,"valami",false,5200),
    // new EventTicketModel(11,1,"valami",false,5200),
    // new EventTicketModel(12,1,"valami",false,5200),
    // new EventTicketModel(13,1,"valami",false,5200),
    // new EventTicketModel(14,1,"valami",false,5200),
    // new EventTicketModel(15,1,"valami",false,5200),
    // new EventTicketModel(16,1,"valami",false,5200)
  ]
  eventTicketsRow2:EventTicketModel[]=[
    // new EventTicketModel(1,2,"valami",false,4200),
    // new EventTicketModel(2,2,"valami",false,4200),
    // new EventTicketModel(3,2,"valami",false,4200),
    // new EventTicketModel(4,2,"valami",false,4200),
    // new EventTicketModel(5,2,"valami",false,4200),
    // new EventTicketModel(6,2,"valami",false,4200),
    // new EventTicketModel(7,2,"valami",false,4200),
    // new EventTicketModel(8,2,"valami",false,4200),
    // new EventTicketModel(9,2,"valami",false,4200),
    // new EventTicketModel(10,2,"valami",false,4200),
    // new EventTicketModel(11,2,"valami",false,4200),
    // new EventTicketModel(12,2,"valami",false,4200),
    // new EventTicketModel(13,2,"valami",false,4200),
    // new EventTicketModel(14,2,"valami",false,4200),
    // new EventTicketModel(15,2,"valami",false,4200),
    // new EventTicketModel(16,2,"valami",false,4200),
    // new EventTicketModel(17,2,"valami",false,4200)
  ]
  eventTicketsRow3:EventTicketModel[]=[
    // new EventTicketModel(1,3,"valami",false,3200),
    // new EventTicketModel(2,3,"valami",false,3200),
    // new EventTicketModel(3,3,"valami",false,3200),
    // new EventTicketModel(4,3,"valami",false,3200),
    // new EventTicketModel(5,3,"valami",false,3200),
    // new EventTicketModel(6,3,"valami",false,3200),
    // new EventTicketModel(7,3,"valami",false,3200),
    // new EventTicketModel(8,3,"valami",false,3200),
    // new EventTicketModel(9,3,"valami",false,3200),
    // new EventTicketModel(10,3,"valami",false,3200),
    // new EventTicketModel(11,3,"valami",false,3200),
    // new EventTicketModel(12,3,"valami",false,3200),
    // new EventTicketModel(13,3,"valami",false,3200),
    // new EventTicketModel(14,3,"valami",false,3200),
    // new EventTicketModel(15,3,"valami",false,3200),
    // new EventTicketModel(16,3,"valami",false,3200)
  ]
  eventTicketsRow4:EventTicketModel[]=[
    // new EventTicketModel(1,4,"valami",false,2200),
    // new EventTicketModel(2,4,"valami",false,2200),
    // new EventTicketModel(3,4,"valami",false,2200),
    // new EventTicketModel(4,4,"valami",false,2200),
    // new EventTicketModel(5,4,"valami",false,2200),
    // new EventTicketModel(6,4,"valami",false,2200),
    // new EventTicketModel(7,4,"valami",false,2200),
    // new EventTicketModel(8,4,"valami",false,2200),
    // new EventTicketModel(9,4,"valami",false,2200),
    // new EventTicketModel(10,4,"valami",false,2200),
    // new EventTicketModel(11,4,"valami",false,2200),
    // new EventTicketModel(12,4,"valami",false,2200),
    // new EventTicketModel(13,4,"valami",false,2200),
    // new EventTicketModel(14,4,"valami",false,2200),
    // new EventTicketModel(15,4,"valami",false,2200)
  ]

  eventTicketsRow5:EventTicketModel[]=[
    // new EventTicketModel(1,5,"valami",false,2200),
    // new EventTicketModel(2,5,"valami",false,2200),
    // new EventTicketModel(3,5,"valami",false,2200),
    // new EventTicketModel(4,5,"valami",false,2200),
    // new EventTicketModel(5,5,"valami",false,2200),
    // new EventTicketModel(6,5,"valami",false,2200),
    // new EventTicketModel(7,5,"valami",false,2200),
    // new EventTicketModel(8,5,"valami",false,2200),
    // new EventTicketModel(9,5,"valami",false,2200),
    // new EventTicketModel(10,5,"valami",false,2200),
    // new EventTicketModel(11,5,"valami",false,2200),
    // new EventTicketModel(12,5,"valami",false,2200),
    // new EventTicketModel(13,5,"valami",false,2200),
    // new EventTicketModel(14,5,"valami",false,2200),
    // new EventTicketModel(15,5,"valami",false,2200),
    // new EventTicketModel(16,5,"valami",false,2200)
  ]

  eventTicketsRow6:EventTicketModel[]=[
    // new EventTicketModel(1,6,"valami",false,2200),
    // new EventTicketModel(2,6,"valami",false,2200),
    // new EventTicketModel(3,6,"valami",false,2200),
    // new EventTicketModel(4,6,"valami",false,2200),
    // new EventTicketModel(5,6,"valami",false,2200),
    // new EventTicketModel(6,6,"valami",false,2200),
    // new EventTicketModel(7,6,"valami",false,2200),
    // new EventTicketModel(8,6,"valami",false,2200),
    // new EventTicketModel(9,6,"valami",false,2200),
    // new EventTicketModel(10,6,"valami",false,2200),
    // new EventTicketModel(11,6,"valami",false,2200),
    // new EventTicketModel(12,6,"valami",false,2200),
    // new EventTicketModel(13,6,"valami",false,2200),
    // new EventTicketModel(14,6,"valami",false,2200),
    // new EventTicketModel(15,6,"valami",false,2200)
  ]

  eventTicketsRow7:EventTicketModel[]=[
    // new EventTicketModel(1,7,"valami",false,2200),
    // new EventTicketModel(2,7,"valami",false,2200),
    // new EventTicketModel(3,7,"valami",false,2200),
    // new EventTicketModel(4,7,"valami",false,2200),
    // new EventTicketModel(5,7,"valami",false,2200),
    // new EventTicketModel(6,7,"valami",false,2200),
    // new EventTicketModel(7,7,"valami",false,2200),
    // new EventTicketModel(8,7,"valami",false,2200),
    // new EventTicketModel(9,7,"valami",false,2200),
    // new EventTicketModel(10,7,"valami",false,2200),
    // new EventTicketModel(11,7,"valami",false,2200),
    // new EventTicketModel(12,7,"valami",false,2200),
    // new EventTicketModel(13,7,"valami",false,2200),
    // new EventTicketModel(14,7,"valami",false,2200),
    // new EventTicketModel(15,7,"valami",false,2200),
    // new EventTicketModel(16,7,"valami",false,2200)
  ]

  eventTicketsRow8:EventTicketModel[]=[
    // new EventTicketModel(1,8,"valami",false,2200),
    // new EventTicketModel(2,8,"valami",false,2200),
    // new EventTicketModel(3,8,"valami",false,2200),
    // new EventTicketModel(4,8,"valami",false,2200),
    // new EventTicketModel(5,8,"valami",false,2200),
    // new EventTicketModel(6,8,"valami",false,2200),
    // new EventTicketModel(7,8,"valami",false,2200),
    // new EventTicketModel(8,8,"valami",false,2200),
    // new EventTicketModel(9,8,"valami",false,2200),
    // new EventTicketModel(10,8,"valami",false,2200),
    // new EventTicketModel(11,8,"valami",false,2200),
    // new EventTicketModel(12,8,"valami",false,2200),
    // new EventTicketModel(13,8,"valami",false,2200),
    // new EventTicketModel(14,8,"valami",false,2200),
    // new EventTicketModel(15,8,"valami",false,2200)
  ]

  eventTicketsRow9:EventTicketModel[]=[
    // new EventTicketModel(1,9,"valami",false,2200),
    // new EventTicketModel(2,9,"valami",false,2200),
    // new EventTicketModel(3,9,"valami",false,2200),
    // new EventTicketModel(4,9,"valami",false,2200),
    // new EventTicketModel(5,9,"valami",false,2200),
    // new EventTicketModel(6,9,"valami",false,2200),
    // new EventTicketModel(7,9,"valami",false,2200),
    // new EventTicketModel(8,9,"valami",false,2200),
    // new EventTicketModel(9,9,"valami",false,2200),
    // new EventTicketModel(10,9,"valami",false,2200),
    // new EventTicketModel(11,9,"valami",false,2200),
    // new EventTicketModel(12,9,"valami",false,2200),
    // new EventTicketModel(13,9,"valami",false,2200),
    // new EventTicketModel(14,9,"valami",false,2200),
    // new EventTicketModel(15,9,"valami",false,2200),
    // new EventTicketModel(16,9,"valami",false,2200)
  ]

  eventTicketsRow10:EventTicketModel[]=[
    // new EventTicketModel(1,10,"valami",false,2200),
    // new EventTicketModel(2,10,"valami",false,2200),
    // new EventTicketModel(3,10,"valami",false,2200),
    // new EventTicketModel(4,10,"valami",false,2200),
    // new EventTicketModel(5,10,"valami",false,2200),
    // new EventTicketModel(6,10,"valami",false,2200),
    // new EventTicketModel(7,10,"valami",false,2200),
    // new EventTicketModel(8,10,"valami",false,2200),
    // new EventTicketModel(9,10,"valami",false,2200),
    // new EventTicketModel(10,10,"valami",false,2200),
    // new EventTicketModel(11,10,"valami",false,2200),
    // new EventTicketModel(12,10,"valami",false,2200),
    // new EventTicketModel(13,10,"valami",false,2200),
    // new EventTicketModel(14,10,"valami",false,2200),
    // new EventTicketModel(15,10,"valami",false,2200),
    // new EventTicketModel(16,10,"valami",false,2200),
    // new EventTicketModel(16,10,"valami",false,2200)
  ]

  eventTicketsRow11:EventTicketModel[]=[
    // new EventTicketModel(1,11,"valami",false,2200),
    // new EventTicketModel(2,11,"valami",false,2200),
    // new EventTicketModel(3,11,"valami",false,2200),
    // new EventTicketModel(4,11,"valami",false,2200),
    // new EventTicketModel(5,11,"valami",false,2200),
    // new EventTicketModel(6,11,"valami",false,2200),
    // new EventTicketModel(7,11,"valami",false,2200),
    // new EventTicketModel(8,11,"valami",false,2200),
    // new EventTicketModel(9,11,"valami",false,2200),
    // new EventTicketModel(10,11,"valami",false,2200),
    // new EventTicketModel(11,11,"valami",false,2200),
    // new EventTicketModel(12,11,"valami",false,2200),
    // new EventTicketModel(13,11,"valami",false,2200),
    // new EventTicketModel(14,11,"valami",false,2200),
    // new EventTicketModel(15,11,"valami",false,2200),
    // new EventTicketModel(16,11,"valami",false,2200)
  ]
  eventTicketsRow12:EventTicketModel[]=[
    // new EventTicketModel(1,12,"valami",false,2200),
    // new EventTicketModel(2,12,"valami",false,2200),
    // new EventTicketModel(3,12,"valami",false,2200),
    // new EventTicketModel(4,12,"valami",false,2200),
    // new EventTicketModel(5,12,"valami",false,2200),
    // new EventTicketModel(6,12,"valami",false,2200),
    // new EventTicketModel(7,12,"valami",false,2200),
    // new EventTicketModel(8,12,"valami",false,2200),
    // new EventTicketModel(9,12,"valami",false,2200),
    // new EventTicketModel(10,12,"valami",false,2200),
    // new EventTicketModel(11,12,"valami",false,2200),
    // new EventTicketModel(12,12,"valami",false,2200),
    // new EventTicketModel(13,12,"valami",false,2200),
    // new EventTicketModel(14,12,"valami",false,2200),
    // new EventTicketModel(15,12,"valami",false,2200)
  ]
  eventTicketsRow13:EventTicketModel[]=[
    // new EventTicketModel(1,13,"valami",false,2200),
    // new EventTicketModel(2,13,"valami",false,2200),
    // new EventTicketModel(3,13,"valami",false,2200),
    // new EventTicketModel(4,13,"valami",false,2200),
    // new EventTicketModel(5,13,"valami",false,2200),
    // new EventTicketModel(6,13,"valami",false,2200),
    // new EventTicketModel(7,13,"valami",false,2200),
    // new EventTicketModel(8,13,"valami",false,2200),
    // new EventTicketModel(9,13,"valami",false,2200),
    // new EventTicketModel(10,13,"valami",false,2200),
    // new EventTicketModel(11,13,"valami",false,2200),
    // new EventTicketModel(12,13,"valami",false,2200),
    // new EventTicketModel(13,13,"valami",false,2200),
    // new EventTicketModel(14,13,"valami",false,2200),
    // new EventTicketModel(15,13,"valami",false,2200),
    // new EventTicketModel(16,13,"valami",false,2200)
  ]
  eventTicketsRow14:EventTicketModel[]=[
    // new EventTicketModel(1,14,"valami",false,2200),
    // new EventTicketModel(2,14,"valami",false,2200),
    // new EventTicketModel(3,14,"valami",false,2200),
    // new EventTicketModel(4,14,"valami",false,2200),
    // new EventTicketModel(5,14,"valami",false,2200),
    // new EventTicketModel(6,14,"valami",false,2200),
    // new EventTicketModel(7,14,"valami",false,2200),
    // new EventTicketModel(8,14,"valami",false,2200),
    // new EventTicketModel(9,14,"valami",false,2200),
    // new EventTicketModel(10,14,"valami",false,2200),
    // new EventTicketModel(11,14,"valami",false,2200),
    // new EventTicketModel(12,14,"valami",false,2200),
    // new EventTicketModel(13,14,"valami",false,2200),
    // new EventTicketModel(14,14,"valami",false,2200),
    // new EventTicketModel(15,14,"valami",false,2200),
    // new EventTicketModel(16,14,"valami",false,2200),
    // new EventTicketModel(16,14,"valami",false,2200)
  ]
  
  constructor() { }
  getAllEventTicketTest(){
    return this.allEventTicketTest;
  }

  getAllEventTicket(){
    return this.allEventTicket;
  }
  getEventTicketRow1(){
    return this.eventTicketsRow1;
  }
  getEventTicketRow2(){
    return this.eventTicketsRow2;
  }
  getEventTicketRow3(){
    return this.eventTicketsRow3;
  }
  getEventTicketRow4(){
    return this.eventTicketsRow4;
  }
  getEventTicketRow5(){
    return this.eventTicketsRow5;
  }
  getEventTicketRow6(){
    return this.eventTicketsRow6;
  }
  getEventTicketRow7(){
    return this.eventTicketsRow7;
  }
  getEventTicketRow8(){
    return this.eventTicketsRow8;
  }
  getEventTicketRow9(){
    return this.eventTicketsRow9;
  }
  getEventTicketRow10(){
    return this.eventTicketsRow10;
  }
  getEventTicketRow11(){
    return this.eventTicketsRow11;
  }
  getEventTicketRow12(){
    return this.eventTicketsRow12;
  }
  getEventTicketRow13(){
    return this.eventTicketsRow13;
  }
  getEventTicketRow14(){
    return this.eventTicketsRow14;
  }

  setEventTicketRows() {
 //   console.log("serviceban1");
 //   console.log(this.allEventTicketTest);
 //   console.log(this.allEventTicketTest.length);

    for(let i=0;i<16;i++) {
      this.eventTicketsRow1.push(this.allEventTicket[i]);
    }
//    console.log("serviceban2");
//    console.log(this.eventTicketsRow1);
    for(let i=16;i<33;i++) {
      this.eventTicketsRow2.push(this.allEventTicket[i]);
    }
    for(let i=33;i<49;i++) {
      this.eventTicketsRow3.push(this.allEventTicket[i]);
    }
    for(let i=49;i<64;i++) {
      this.eventTicketsRow4.push(this.allEventTicket[i]);
    }
    for(let i=64;i<80;i++) {
      this.eventTicketsRow5.push(this.allEventTicket[i]);
    }
    for(let i=80;i<95;i++) {
      this.eventTicketsRow6.push(this.allEventTicket[i]);
    }
    for(let i=95;i<111;i++) {
      this.eventTicketsRow7.push(this.allEventTicket[i]);
    }
    for(let i=111;i<126;i++) {
      this.eventTicketsRow8.push(this.allEventTicket[i]);
    }
    for(let i=126;i<142;i++) {
      this.eventTicketsRow9.push(this.allEventTicket[i]);
    }
    for(let i=142;i<159;i++) {
      this.eventTicketsRow10.push(this.allEventTicket[i]);
    }
    for(let i=159;i<175;i++) {
      this.eventTicketsRow11.push(this.allEventTicket[i]);
    }
    for(let i=175;i<190;i++) {
      this.eventTicketsRow12.push(this.allEventTicket[i]);
    }
    for(let i=190;i<206;i++) {
      this.eventTicketsRow13.push(this.allEventTicket[i]);
    }
    for(let i=206;i<223;i++) {
      this.eventTicketsRow14.push(this.allEventTicket[i]);
    }
  }

  setAllEventTicketEmpty(){
    this.allEventTicket=[];
    this.eventTicketsRow1=[];
    this.eventTicketsRow2=[];
    this.eventTicketsRow3=[];
    this.eventTicketsRow4=[];
    this.eventTicketsRow5=[];
    this.eventTicketsRow6=[];
    this.eventTicketsRow7=[];
    this.eventTicketsRow8=[];
    this.eventTicketsRow9=[];
    this.eventTicketsRow10=[];
    this.eventTicketsRow11=[];
    this.eventTicketsRow12=[];
    this.eventTicketsRow13=[];
    this.eventTicketsRow14=[];
  }

  clickedTickets:{row:number,chair:number}[]=[];

  getClickedTickets() {
    return this.clickedTickets;
  }

  setEmptyClickedTickets(){
    this.clickedTickets=[];
  }

  reservedTicketPrice:number=0;

  setReservedTicketPrice(price: number) {
    this.reservedTicketPrice=this.reservedTicketPrice + price;
  }

  getReservedTicketPrice() {
    return this.reservedTicketPrice;
  }

  setReservedTicketPriceDefault(){
    this.reservedTicketPrice=0;
  }
  
}
