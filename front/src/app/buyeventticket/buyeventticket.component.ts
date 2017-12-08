import { Router } from '@angular/router';
import { DatabaseService } from './../database.service';
import { EventticketService } from './../eventticket.service';
import { EventTicketModel } from './eventticket.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-buyeventticket',
  templateUrl: './buyeventticket.component.html',
  styleUrls: ['./buyeventticket.component.css']
})
export class BuyeventticketComponent implements OnInit {

  selectedTicketsInfo:EventTicketModel[]=[];

  @ViewChild('draw') draw: ElementRef;
  @ViewChild('tickets') tickets: ElementRef;
  public context: CanvasRenderingContext2D;

  eventTicket1: EventTicketModel[] = [];
  eventTicket2: EventTicketModel[] = [];
  eventTicket3: EventTicketModel[] = [];
  eventTicket4: EventTicketModel[] = [];
  eventTicket5: EventTicketModel[] = [];
  eventTicket6: EventTicketModel[] = [];
  eventTicket7: EventTicketModel[] = [];
  eventTicket8: EventTicketModel[] = [];
  eventTicket9: EventTicketModel[] = [];
  eventTicket10: EventTicketModel[] = [];
  eventTicket11: EventTicketModel[] = [];
  eventTicket12: EventTicketModel[] = [];
  eventTicket13: EventTicketModel[] = [];
  eventTicket14: EventTicketModel[] = [];

  ticketCanvas: HTMLCollection;


  constructor(private eventTicketService: EventticketService,
              private databaseService: DatabaseService,
              private router:Router) {
      console.log("constructor");
      console.log(this.selectedTicketsInfo);
  }

  ngOnInit() {
    this.selectedTicketsInfo=[];
    this.eventTicketService.setEmptyClickedTickets();
    console.log("ngoninit");
    console.log(this.selectedTicketsInfo);
    this.eventTicketService.setAllEventTicketEmpty();
    this.databaseService.getTickets().subscribe(
      (tickets: any[]) => this.eventTicketService.getAllEventTicket().push(...tickets),
      (error) => console.log(error)
    )

    setTimeout(() => {
      if (this.eventTicketService.getAllEventTicket().length === 0) {
        console.log("0 az erteke");
        this.eventTicketService.setAllEventTicketEmpty();
        this.databaseService.getTickets().subscribe(
          (tickets: any[]) => this.eventTicketService.getAllEventTicket().push(...tickets),
          (error) => console.log(error)
        )
      }
      this.eventTicketService.setEventTicketRows();
      this.eventTicket1 = this.eventTicketService.getEventTicketRow1();
      this.eventTicket2 = this.eventTicketService.getEventTicketRow2();
      this.eventTicket3 = this.eventTicketService.getEventTicketRow3();
      this.eventTicket4 = this.eventTicketService.getEventTicketRow4();
      this.eventTicket5 = this.eventTicketService.getEventTicketRow5();
      this.eventTicket6 = this.eventTicketService.getEventTicketRow6();
      this.eventTicket7 = this.eventTicketService.getEventTicketRow7();
      this.eventTicket8 = this.eventTicketService.getEventTicketRow8();
      this.eventTicket9 = this.eventTicketService.getEventTicketRow9();
      this.eventTicket10 = this.eventTicketService.getEventTicketRow10();
      this.eventTicket11 = this.eventTicketService.getEventTicketRow11();
      this.eventTicket12 = this.eventTicketService.getEventTicketRow12();
      this.eventTicket13 = this.eventTicketService.getEventTicketRow13();
      this.eventTicket14 = this.eventTicketService.getEventTicketRow14();
    }, 1000);

    //     console.log(this.eventTicket1);
  }

  ngAfterViewInit() {
    console.log("ngafter");
    console.log(this.selectedTicketsInfo);
    setTimeout(() => {
      let drawCanvas = this.draw.nativeElement;
      let drawContext = drawCanvas.getContext('2d');
      drawContext.font = "30px Verdana";
      drawContext.fillText("Szinpad",40,35);
  
      this.ticketCanvas = (<HTMLDivElement>this.tickets.nativeElement).children;
      for (let i = 0; i < this.ticketCanvas.length; i++) {
        let actualRow = this.ticketCanvas[i];
        for (let j = 0; j < actualRow.children.length; j++) {
          this.context = (<HTMLCanvasElement>actualRow.children[j]).getContext('2d');
          this.context.font = "13px Georgia";
          this.context.fillText((j + 1).toString(), 6, 14);
        }
      }
    }, 1500)

  }

  clickedTicket(row: number, chair: number) {
    console.log("Row:" + row + " " + "Chair" + chair);
    let index1 = false;
    let index2 = false;
    let clickedTicketsIndex;

    for (let i = 0; i < this.eventTicketService.getClickedTickets().length; i++) {
      if (this.eventTicketService.getClickedTickets()[i].row === row) {
          index1 = true;
        if(this.eventTicketService.getClickedTickets()[i].chair === chair){
          index2 = true;
          clickedTicketsIndex=i;
//          console.log(clickedTicketsIndex);
        }
      }
    }

    if(index1 && index2) {
      this.eventTicketService.getClickedTickets().splice(clickedTicketsIndex, 1);
    }else{
      this.eventTicketService.getClickedTickets().push({row:row,chair:chair});
    }

    //Ez az egész tartozik a szovegdobozhoz
    let tickets = this.eventTicketService.getAllEventTicket();
    let indexOfClickedTicket: number[]=[];
    for(let i=0;i<this.eventTicketService.getClickedTickets().length;i++) {
      let indexRow=this.eventTicketService.getClickedTickets()[i].row;
      let indexChair=this.eventTicketService.getClickedTickets()[i].chair;
      for(let k=0;k<tickets.length;k++){
        if(tickets[k].row === indexRow && tickets[k].chair===indexChair) {
          indexOfClickedTicket.push(k);      //ez a szovegdobozhoz kell
          console.log("Bejott ide8");
          console.log(indexOfClickedTicket);
          break;
        }
      }
    }


    this.selectedTicketsInfo=[];
    for(let i=0;i<indexOfClickedTicket.length;i++){
      this.selectedTicketsInfo.push(this.eventTicketService.getAllEventTicket()[indexOfClickedTicket[i]]);
    }

    console.log("Ez érdekel most engem");
    console.log(this.selectedTicketsInfo);
  }



  saveTickets() {
    this.databaseService.storeTickets(this.eventTicketService.getAllEventTicket()).subscribe((response) => console.log(response), (error) => console.log(error));
  }

  loadTickets() {
    this.databaseService.getTickets().subscribe(
      (tickets: any[]) => this.eventTicketService.getAllEventTicketTest().push(...tickets),
      (error) => console.log(error)
    )
    //   setTimeout(()=>{console.log(this.eventTicketService.getAllEventTicketTest());},500);

    console.log(this.eventTicketService.getAllEventTicketTest())
    console.log(this.eventTicketService.getAllEventTicketTest()[0]);
  }

  clickedTickets() {
    console.log(this.eventTicketService.getClickedTickets());
  }

  reserveTickets(){
    this.eventTicketService.setReservedTicketPriceDefault();

    let tickets = this.eventTicketService.getAllEventTicket();
    for(let i=0;i<this.eventTicketService.getClickedTickets().length;i++) {
      let indexRow=this.eventTicketService.getClickedTickets()[i].row;
      let indexChair=this.eventTicketService.getClickedTickets()[i].chair;
      for(let k=0;k<tickets.length;k++){
        if(tickets[k].row === indexRow && tickets[k].chair===indexChair) {
          console.log("Bejott ide");
          console.log(k);
          tickets[k].reserved=true;


          //Jegyár kiszamítás összes
          if(tickets[k].row >=1 && tickets[k].row <=4 )
          {
            this.eventTicketService.setReservedTicketPrice(1000);
          }
          if(tickets[k].row >=5 && tickets[k].row <=8 )
          {
            this.eventTicketService.setReservedTicketPrice(3000);
          }
          if(tickets[k].row >=9 && tickets[k].row <=14 )
          {
            this.eventTicketService.setReservedTicketPrice(6000);
          }
          break;
        }
      }
    }
    console.log(tickets);
//    this.databaseService.storeTickets(tickets).subscribe((response) => console.log(response),(error) =>console.log(error));
    this.router.navigate(['/feedback']);
  }

}
